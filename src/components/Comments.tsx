"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { client } from "@/sanity/lib/getProjects";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { motion } from "framer-motion";

interface Comment {
  _id?: string;
  name: string;
  message: string;
  profilePic: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  // Fetch Comments from Local Storage & Sanity
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(storedComments);

    client
      .fetch('*[_type == "comment"]{_id, name, message, profilePic}')
      .then((data) => setComments([...storedComments, ...data]));
  }, []);

  // Handle Image Upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Add Comment
  const addComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newComment: Comment = {
      _id: uuidv4(),
      name,
      message,
      profilePic: profilePic || "/black-placeholder.jpg", 
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));

    client.create({ _type: "comment", ...newComment });

    setName("");
    setMessage("");
    setProfilePic(null);
    setSelectedFile(null);
  };

  // Delete Comment
  const deleteComment = (id?: string) => {
    const updatedComments = comments.filter((c) => c._id !== id);
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    if (id) client.delete(id);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8">
      {/* Comment Form */}
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
        <form className="space-y-4 mt-4" onSubmit={addComment}>
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
          <label className="w-full p-2 rounded bg-gray-700 text-white text-center cursor-pointer block">
            {selectedFile ? "Selected" : "Your Image"}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              required
            />
          </label>
          {profilePic && (
            <Image
              src={profilePic}
              alt="Preview"
              width={500}
              height={500}
              className="w-12 h-12 rounded-full mt-2 mx-auto"
            />
          )}
          <button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-transform hover:scale-105"
            data-aos="zoom-in"
          >
            Post Comment
          </button>
        </form>
      </motion.div>

      {/* Comments Section */}
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
                <div className="flex items-center space-x-2">
                  <Image
                    src={comment.profilePic || "/black-placeholder.jpg"}
                    className="w-8 h-8 rounded-full"
                    alt="User"
                    width={500}
                    height={500}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {comment.name}
                    </p>
                    <p className="text-gray-300 text-sm">{comment.message}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteComment(comment._id)}
                  className="text-red-400 hover:text-red-500 transition-transform hover:scale-110"
                >
                  ✖
                </button>
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





// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/getProjects";
// import { fetchComments } from "@/sanity/lib/fetchComments";
// import { v4 as uuidv4 } from "uuid";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";

// interface Comment {
//   _id?: string;
//   name: string;
//   message: string;
//   profilePic: string;
// }

// export default function Comments() {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [profilePic, setProfilePic] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);

//   // Initialize AOS animations
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out" });
//   }, []);

//   // Fetch comments from Sanity
//   useEffect(() => {
//     async function getComments() {
//       const sanityComments = await fetchComments();
//       setComments(sanityComments);
//     }
//     getComments();
//   }, []);

//   // Handle Image Upload
//   const handleImageUpload = async (file: File) => {
//     const imageData = new FormData();
//     imageData.append("file", file);

//     try {
//       const asset = await client.assets.upload("image", file);
//       return asset.url;
//     } catch (error) {
//       console.error("Image upload failed:", error);
//       return null;
//     }
//   };

//   // Add Comment
//   const addComment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name || !message) return;

//     setLoading(true);
//     let uploadedImageUrl = profilePic;

//     if (selectedFile) {
//       uploadedImageUrl = await handleImageUpload(selectedFile);
//     }

//     const newComment: Comment = {
//       _id: uuidv4(),
//       name,
//       message,
//       profilePic: uploadedImageUrl || "/person.jpg",
//     };

//     try {
//       const savedComment = await client.create({
//         _type: "comment",
//         name,
//         message,
//         image: { asset: { _ref: uploadedImageUrl } },
//       });

//       setComments([{ ...savedComment, profilePic: uploadedImageUrl || "/black-placeholder.jpg" }, ...comments]);
//       setName("");
//       setMessage("");
//       setProfilePic(null);
//       setSelectedFile(null);
//     } catch (error) {
//       console.error("Failed to post comment:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete Comment
//   const deleteComment = async (id?: string) => {
//     if (!id) return;
//     try {
//       await client.delete(id);
//       setComments(comments.filter((c) => c._id !== id));
//     } catch (error) {
//       console.error("Failed to delete comment:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8">
//       {/* Comment Form */}
//       <motion.div
//         className="w-full max-w-lg bg-[#1b0039] p-6 rounded-lg shadow-lg"
//         data-aos="fade-up"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-semibold text-purple-400">
//           Leave a Comment
//         </h2>
//         <form className="space-y-4 mt-4" onSubmit={addComment}>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-3 rounded bg-gray-600 text-white focus:ring-2 focus:ring-purple-400"
//             required
//           />
//           <textarea
//             placeholder="Write your message here..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
//             required
//           ></textarea>
//           <label className="w-full p-2 rounded bg-gray-700 text-white text-center cursor-pointer block">
//             {selectedFile ? "Selected" : "Your Image"}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
//               className="hidden"
//             />
//           </label>
//           {profilePic && (
//             <Image
//               src={profilePic}
//               alt="Preview"
//               width={50}
//               height={50}
//               className="w-12 h-12 rounded-full mt-2 mx-auto"
//             />
//           )}
//           <button
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-transform hover:scale-105"
//             data-aos="zoom-in"
//             disabled={loading}
//           >
//             {loading ? "Posting..." : "Post Comment"}
//           </button>
//         </form>
//       </motion.div>

//       {/* Comments Section */}
//       <motion.div
//         className="w-full max-w-lg bg-[#1b0039] p-6 rounded-lg shadow-lg"
//         data-aos="fade-up"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-semibold text-purple-400">
//           Recent Comments
//         </h2>
//         <div className="mt-6 space-y-4">
//           {comments.length > 0 ? (
//             comments.map((comment) => (
//               <motion.div
//                 key={comment._id}
//                 className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="flex items-center space-x-2">
//                   <Image
//                     src={comment.profilePic || "/black-placeholder.jpg"}
//                     className="w-8 h-8 rounded-full"
//                     alt="User"
//                     width={50}
//                     height={50}
//                   />
//                   <div>
//                     <p className="text-sm font-medium text-white">
//                       {comment.name}
//                     </p>
//                     <p className="text-gray-300 text-sm">{comment.message}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => deleteComment(comment._id)}
//                   className="text-red-400 hover:text-red-500"
//                 >
//                   ✖
//                 </button>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-gray-400 text-sm text-center">No comments yet.</p>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }
