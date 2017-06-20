class Sequence {
    
    static generateDotSequence (length, rng) {
        const dots = []

        for (let counter = length; counter > 0; counter--) {
            dots.push({
                x: rng.generate(),
                y: rng.generate()
            })
        }

        return dots
    }

    static generateSequence(length, rng) {
        const numbers = [];

        for (let counter = length; counter > 0; counter--) {
            numbers.push(rng.generate());
        }

        return numbers;
    }

    static generateNormalSequence(length, rng) {
        const numbers = [];
        let x, y, r;

        for (let counter = length; counter > 0; counter--) {
            do {
                x = 2 * rng.generate() - 1;
                y = 2 * rng.generate() - 1;
                r = x * x + y * y;
            } while (r >= 1 || r === 0);

            numbers.push(
                x * Math.sqrt(-2 * Math.log(r) / r)
            );
        }

        return numbers;
    }
}

export {
    Sequence
};