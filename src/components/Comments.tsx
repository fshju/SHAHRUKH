"use client";
import { useEffect, useState } from "react";
import { uploadImage } from "@/sanity/lib/uploadImage";
import { fetchComments } from "@/sanity/lib/fetchComments";
import { addComment } from "@/sanity/lib/addComment";
import { deleteComment } from "@/sanity/lib/deleteComment";
import { FaStar } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/imageUrl";
import { motion } from "framer-motion";

interface Comment {
  _id: string;
  name: string;
  comments: string;
  profilePic: string | null;
  rating: number;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getComments() {
      const sanityComments = await fetchComments();
      setComments(sanityComments);
    }
    getComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !message || !profilePic || rating === 0) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    const imageId = await uploadImage(profilePic);
    if (!imageId) {
      setError("Image upload failed.");
      setLoading(false);
      return;
    }

    const newComment = await addComment(name, message, imageId, rating);
    if (newComment) {
      const sanityComments = await fetchComments();
      setComments(sanityComments);
      setName("");
      setMessage("");
      setProfilePic(null);
      setRating(0);
    }
    setLoading(false);
  };

  const handleDelete = async (commentId: string) => {
    const success = await deleteComment(commentId);
    if (success) {
      setComments((prev) =>
        prev.filter((comment) => comment._id !== commentId)
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8">
      <motion.div
        className="w-full max-w-lg bg-[#1b0039] p-6 rounded-lg shadow-lg"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-purple-400">
          Leave a Comment
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-gray-600 text-white focus:ring-2 focus:ring-purple-400"
            required
            data-aos="fade-right"
          />
          <textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
            required
            data-aos="fade-left"
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePic(e.target.files?.[0] || null)}
            className="w-full p-3 rounded bg-gray-600 text-white focus:ring-2 focus:ring-purple-400"
            required
            data-aos="fade-up"
          />
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => setRating(star)}
                className={`w-6 h-6 cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
          <button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90"
            disabled={loading}
            data-aos="zoom-in"
          >
            {loading ? "Submitting..." : "Post Comment"}
          </button>
        </form>
      </motion.div>
      <motion.div
        className="w-full max-w-lg bg-[#1b0039] p-6 rounded-lg shadow-lg"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-purple-400">
          Recent Comments
        </h2>
        <div className="mt-6 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <motion.div
                key={comment._id}
                className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-2" >
                  {comment.profilePic && (
                    <img
                      src={urlFor(comment.profilePic).url()}
                      alt="User"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium text-white">
                      {comment.name}
                    </p>
                    <p className="text-gray-300 text-sm">{comment.comments}</p>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`w-4 h-4 ${index < comment.rating ? "text-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
               </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-sm text-center">
              No comments yet.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
