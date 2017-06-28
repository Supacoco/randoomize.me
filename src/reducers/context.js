import { CONTEXT_CONFIG } from '../config/context.js'
import { UPDATE_SVG_CONFIG } from '../actions/context.js'

const initialState = {
    viewBox: CONTEXT_CONFIG.uniform.viewBox,
    dotSize: CONTEXT_CONFIG.uniform.dotSize,
    dotColor: 'chartreuse',
    width: 900,
    height: 900,
    backgroundColor: '#1e1e1e'
}

const context = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SVG_CONFIG:
            return { ...state, ...CONTEXT_CONFIG[action.distribution] }
        default:
            return state
    }
}

export {
    context
}