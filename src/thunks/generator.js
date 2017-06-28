import { updateSvgConfig } from '../actions/context.js'
import { generateSequence } from '../actions/generator.js'

export const generateRandoomness = () => {
    return (dispatch, getState) => {
        const { generator: { distribution, seed } } = getState()

        dispatch(updateSvgConfig(distribution))
        dispatch(generateSequence(seed))
    }
}