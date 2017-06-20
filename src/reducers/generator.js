import {
    GENERATE_NUMBER,
    GENERATE_SEQUENCE,
    GENERATOR_UPDATE_ITERATIONS
} from '../actions/generator.js'

import { Sequence } from '../helpers/sequence.js'

import { Hoole } from 'randoom'

const initialState = {
    initialSeed: Date.now(),
    currentSeed: Date.now(),
    numberOfIteration: 1000,
    elapsedTime: undefined,
    numbers: []
}

const generator = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_NUMBER: {
            const rng = new Hoole(state.currentSeed)
            const sequence = [...state.numbers]
            const stateUpdate = {}

            sequence.push(rng.generate())

            stateUpdate.currentSeed = rng.seed
            stateUpdate.numbers = sequence

            return { ...state, ...stateUpdate }
        }
        case GENERATE_SEQUENCE: {
            const t0 = performance.now();
            const rng = new Hoole(action.seed)
            const sequence = Sequence.generateDotSequence(
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
        default:
            return state
    }
}

export {
    generator
}
