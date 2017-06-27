import { h } from 'preact'

const Generators = ({ names, selected, onChange }) => (
    <select name="selectedGenerator" onChange={e => onChange(e)}>
        {
            names.map(name =>
                <option selected={name === selected} value={name}>{name}</option>
            )
        }
    </select>
)

export default Generators
