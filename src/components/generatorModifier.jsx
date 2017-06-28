import { h } from 'preact'

const GeneratorModifier = ({ onChange, selectedDistribution }) => (
    <span>
        <label><input type="radio" name="distribution" onChange={e => onChange(e)} value="uniform" checked={selectedDistribution === 'uniform'} />Uniform</label>
        <label><input type="radio" name="distribution" onChange={e => onChange(e)} value="gaussian" checked={selectedDistribution === 'gaussian'} />Gaussian</label>
    </span>
)

export default GeneratorModifier