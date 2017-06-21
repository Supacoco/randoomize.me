import { h, render } from 'preact'
import { Provider } from 'preact-redux'

import store from './store/store.js'
import Randoom from './containers/randoom.js'

import './styles/main.scss'

render(
    <Provider store={store}>
        <Randoom />
    </Provider>,
    document.body
)
