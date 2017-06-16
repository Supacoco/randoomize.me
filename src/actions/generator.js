export const GENERATE_NUMBER = 'GENERATE_NUMBER'
export const GENERATE_SEQUENCE = 'GENERATE_SEQUENCE'
export const GENERATOR_UPDATE_ITERATIONS = 'GENERATOR_UPDATE_ITERATIONS'

export const generateNumber = () => (
    { type: GENERATE_NUMBER }
)

export const generateSequence = (seed) => (
    { type: GENERATE_SEQUENCE, seed }
)

export const generatorUpdateIterations = (iterations) => (
    { type: GENERATOR_UPDATE_ITERATIONS, iterations }
)