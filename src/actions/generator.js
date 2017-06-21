export const GENERATOR_GENERATE_SEQUENCE = 'GENERATOR_GENERATE_SEQUENCE'
export const GENERATOR_UPDATE_ITERATIONS = 'GENERATOR_UPDATE_ITERATIONS'
export const GENERATOR_CHANGE = 'GENERATOR_CHANGE'

export const generateSequence = (seed) => (
    { type: GENERATOR_GENERATE_SEQUENCE, seed }
)

export const generatorUpdateIterations = (iterations) => (
    { type: GENERATOR_UPDATE_ITERATIONS, iterations }
)

export const generatorChange = (generator) => (
    { type: GENERATOR_CHANGE, generator }
)