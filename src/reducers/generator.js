import {
    GENERATE_NUMBER,
    GENERATE_NUMBER_WITH_NEW_SEED
} from '../actions/generator.js'

import { Hoole } from 'randoom'

const initialState = {
    initialSeed: Date.now(),
    currentSeed: Date.now(),
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
        case GENERATE_NUMBER_WITH_NEW_SEED: {
            const rng = new Hoole(action.seed);
            const sequence = [rng.generate()]
            const stateUpdate = { initialSeed: action.seed, currentSeed: rng.seed, numbers: sequence }

            return { ...state, ...stateUpdate }
        }
        default:
            return state
    }
}

export {
    generator
}
