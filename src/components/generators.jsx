import { h } from 'preact'

const Generators = ({ names, selected, onChange }) => (
    <select onChange={e => onChange(e.target.value)}>
        {
            names.map(name =>
                <option selected={name === selected} value={name}>{name}</option>
            )
        }
    </select>
)

export default Generators
