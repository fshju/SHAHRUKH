export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'imageUrl', type: 'image', title: 'Project Image' },
    { name: 'liveDemo', type: 'url', title: 'Live Demo Link' },
  ],
};