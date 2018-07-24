import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import article from './reducers/article'
import App from './layouts/app'

const store = createStore(article)

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
document.getElementById('root'))