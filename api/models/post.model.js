import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  title: {
    type:String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    default: 'https://imgs.search.brave.com/ueDfPKcONzf0MkzW6uXcEXx-6Z17jTsC8DB4Pj8wGWA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9zdGluZ2VyLmNv/bS90dXRvcmlhbHMv/d3AtY29udGVudC90/aGVtZXMvdHV0b3Jp/YWxzdGhlbWV1cGxp/ZnQvcHVibGljL2lt/YWdlcy9ub19pbWFn/ZS5qcGc'
  },
  category: {
    type: String,
    default: 'uncategorized',
  },

  slug: {
    type: String,
    required: true,
    unique: true
  }


}, {timestamps: true})

const Post = mongoose.model('Post', postSchema)
export default Post