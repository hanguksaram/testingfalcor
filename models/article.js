import mongoose from '../db/mongoose'

const articleSchema = new mongoose.Schema({
    articleTitle: String,
    articleContent: String
})

const Article = mongoose.model('Article', articleSchema, 'articles')

export default Article