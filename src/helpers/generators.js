import * as generators from '@supacoc0/randoom'

export const generatorNames = Object.keys(generators)

export const generatorFactory = (name, seed) => {
    return new generators[name](seed)
}