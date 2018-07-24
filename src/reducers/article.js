const articleMock = {
    '5b5709bd57fde45884b3f031' : {
        articleTitle : "Lorem ipsum",
        articleContent : "Here goes the content of the artticle"
    },
    '5b5709e257fde45884b3f03c' : {
        articleTitle : "Whata",
        articleContent : "Sky is yhe"
    }
}
export default (state = articleMock, action) => {
    switch (action.type) {
        case 'ARTICLES_LIST_ADD':
            return {...action.payload.response}
        
        case 'RETURN_ALL_ARTICLES':
            return {...state}
        
        default:
            return state
    }
}
