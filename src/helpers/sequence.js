export const generateDotSequence = (length, rng) => {
    const dots = []

    for (let counter = length; counter > 0; counter--) {
        dots.push({
            x: rng.generate(),
            y: rng.generate()
        })
    }

    return dots
}

export const generateSequence = (length, rng) => {
    const numbers = []

    for (let counter = length; counter > 0; counter--) {
        numbers.push(rng.generate())
    }

    return numbers
}

export const generateNormalSequence = (length, rng) => {
    const numbers = []
    let x, y, r

    for (let counter = length; counter > 0; counter--) {
        do {
            x = 2 * rng.generate() - 1
            y = 2 * rng.generate() - 1
            r = x * x + y * y
        } while (r >= 1 || r === 0)

        numbers.push(
            x * Math.sqrt(-2 * Math.log(r) / r)
        )
    }

    return numbers
}

export const generateNormalDotSequence = (length, rng) => {
    const sequence = generateNormalSequence(length * 2, rng)
    return sequence.reduce((result, value, index) => {
        if (index % 2 === 0) {
            const dots = sequence.slice(index, index + 2)
            result.push({ x: dots[0], y: dots[1]})
        }
        return result
    }, [])
}
