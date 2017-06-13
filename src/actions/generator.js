export const GENERATE_NUMBER = 'GENERATE_NUMBER'
export const GENERATE_NUMBER_WITH_NEW_SEED = 'GENERATE_NUMBER_WITH_NEW_SEED'

export const generateNumber = () => (
    { type: GENERATE_NUMBER }
)

export const generateNumberFromNewSeed = (seed) => (
    { type: GENERATE_NUMBER_WITH_NEW_SEED, seed }
)