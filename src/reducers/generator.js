import {
    GENERATOR_GENERATE_SEQUENCE,
    GENERATOR_UPDATE_CONFIG,
} from '../actions/generator.js'

import { generateDotSequence, generateNormalDotSequence } from '../helpers/sequence.js'
import { generatorNames, generatorFactory } from '../helpers/generators.js'

const initialState = {
    initialSeed: Date.now(),
    distribution: 'uniform',
    iterations: 10000,
    elapsedTime: undefined,
    availableGenerators: generatorNames,
    selectedGenerator: 'Xorshift',
    numbers: []
}

const generator = (state = initialState, action) => {
    switch (action.type) {
        case GENERATOR_GENERATE_SEQUENCE:
            const rng = generatorFactory(state.selectedGenerator, state.initialSeed)
            const t0 = performance.now();
            const sequence = state.distribution === 'uniform' ?
                generateDotSequence(state.iterations, rng) :
                generateNormalDotSequence(state.iterations, rng)
                    .reduce((result, value, index) => {
                        result.push({
                            x: value.x + 3,
                            y: value.y + 3
                        })
                        return result
                    }, [])
            const t1 = performance.now();

            return { ...state, numbers: sequence, elapsedTime: t1 - t0 }
        case GENERATOR_UPDATE_CONFIG:
            const target = event.target
            const value = target.value
            const name = target.name

            return { ...state, [name]: value }
        default:
            return state
    }
}

export {
    generator
}
