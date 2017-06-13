import { h, render } from 'preact'
import { Provider } from 'preact-redux'

import store from './store/store.js'
import Randoom from './containers/randoom.js'

render(
    <Provider store={store}>
        <Randoom />
    </Provider>,
    document.body
)
