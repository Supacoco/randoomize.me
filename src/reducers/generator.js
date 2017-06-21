import {
    GENERATOR_GENERATE_SEQUENCE,
    GENERATOR_UPDATE_ITERATIONS,
    GENERATOR_CHANGE
} from '../actions/generator.js'

import { generateDotSequence } from '../helpers/sequence.js'
import { generatorNames, generatorFactory } from '../helpers/generators.js'

const initialState = {
    initialSeed: Date.now(),
    currentSeed: Date.now(),
    numberOfIteration: 1000,
    elapsedTime: undefined,
    availableGenerators: generatorNames,
    selectedGenerator: 'Xorshift',
    numbers: []
}

const generator = (state = initialState, action) => {
    switch (action.type) {
        case GENERATOR_GENERATE_SEQUENCE: {
            const t0 = performance.now();
            const rng = generatorFactory(state.selectedGenerator, action.seed)
            const sequence = generateDotSequence(
                state.numberOfIteration,
                rng
            )

            const stateUpdate = {
                initialSeed: action.seed,
                currentSeed: rng.seed,
                numbers: sequence
            }

            const t1 = performance.now();

            return { ...state, ...stateUpdate, elapsedTime: t1 - t0 }
        }
        case GENERATOR_UPDATE_ITERATIONS:
            return { ...state, numberOfIteration: action.iterations }
        case GENERATOR_CHANGE:
            return { ...state, selectedGenerator: action.generator }
        default:
            return state
    }
}

export {
    generator
}
