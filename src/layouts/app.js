import React, { Component } from 'react'
import { connect } from 'react-redux'
import falcorModel from '../falcorModel'
import {addArticle} from '../actions/article'

const mapStateToProps = (state) => ({
    ...state
})
const mapDispatchToProps = (dispatch) => ({
    addArticle: (article) => {dispatch(addArticle(article))}
})

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        
        setTimeout(() => {this._fetch()}, 3000)
        
        
    }
    async _fetch() {
        
        const { addArticle } = this.props
        
        const articlesLength = await falcorModel.
            getValue('articles.length').
            then((length) => length)

        const articles = await falcorModel.
            get(['articles', {from: 0, to: articlesLength-1},
        ['id', 'articleTitle', 'articleContent']])
        .then((articlesResponse) => articlesResponse.json.articles)

        addArticle(articles)
    }
    render() {
        console.log(this.props)
        let articleJSX = []
            for (const articleKey in this.props) {
                
                const articleDetails = this.props[articleKey]
                const currentArticleJSX = (
                    <div key={articleKey}>
                        <h2>{articleDetails.articleTitle}</h2>
                        <h3>{articleDetails.articleContent}</h3>
                    </div>)
                articleJSX.push(currentArticleJSX)
            }

                
        return(
            <div>{articleJSX}</div>
        )
    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)