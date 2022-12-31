const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      
      articleImage: {
        type: String,
        required: true
      }
    },
    { timestamp: true }
)
const Article = mongoose.model("articles", articleSchema);
  
  module.exports = Article ;