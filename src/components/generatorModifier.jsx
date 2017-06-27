import { h } from 'preact'

const GeneratorModifier = ({ onChange }) => (
    <span>
        <label><input type="radio" name="distribution" onChange={e => onChange(e)} value="uniform" checked="true" />Uniform</label>
        <label><input type="radio" name="distribution" onChange={e => onChange(e)} value="gaussian" />Gaussian</label>
    </span>
)

export default GeneratorModifier