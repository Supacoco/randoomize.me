import { h } from 'preact'

const Sequence = ({ numbers }) => (
    <div>
        {numbers.map(number => <div>{number}</div>)}
    </div>
)

export default Sequence