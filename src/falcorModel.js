import falcor from 'falcor'
// import FalcorDataSource from 'falcor-http-datasource'

let cache = {
    articles: [
        {   id: '5b5709bd57fde45884b3f031',
            articleTitle : "Konirivanie",
            articleContent : "Kranirovanie"
        },
        {
            id: '5b5709e257fde45884b3f03c', 
            articleTitle : "Alfirovanie",
            articleContent : "Sasirovanie"
        }
    ]
}
const model = new falcor.Model({
    'cache': cache
})
export default model