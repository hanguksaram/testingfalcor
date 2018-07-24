import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Article from '../models/article'

const app = express()

app.use(cors())
app.use(bodyParser.json({extended: false}))

app.get('/', (request, response) => {
    Article.find().then((articles) => {
        response.json(articles)
    }, (e) => {
        response.status(400).send(e)})
})



app.listen(3000)

export default app