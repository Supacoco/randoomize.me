import { h, render } from 'preact'
import { Xorshift } from 'randoom'

const rng = new Xorshift(1337)
const Randoom = ({ rng }) => (
    <div>
        <p>{rng.generate()}</p>
        <p>{rng.generate()}</p>
        <p>{rng.generate()}</p>
        <p>{rng.generate()}</p>
    </div>
)

render(
    <Randoom rng={rng} />,
    document.body
)