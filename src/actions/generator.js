export const GENERATOR_GENERATE_SEQUENCE = 'GENERATOR_GENERATE_SEQUENCE'
export const GENERATOR_UPDATE_CONFIG = 'GENERATOR_UPDATE_CONFIG'

export const generateSequence = seed => (
    { type: GENERATOR_GENERATE_SEQUENCE, seed }
)

export const generatorUpdateConfig = event => (
    { type: GENERATOR_UPDATE_CONFIG, event }
)
