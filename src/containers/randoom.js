import { h } from 'preact'

import { connect } from 'preact-redux'

import { generatorUpdateConfig } from '../actions/generator.js'
import { generateRandoomness } from '../thunks/generator.js'

import Context from '../components/context.jsx'
import Generators from '../components/generators.jsx'
import GeneratorModifier from '../components/generatorModifier.jsx'

const RandoomComponent = ({ generatorConfig, contextConfig, handleInputChange, generateRandoomness }) => (
    <div>
        <form onSubmit={e => { e.preventDefault(); generateRandoomness() }}>
            <input id="initialSeed" name="initialSeed" type="number" placeholder="seed" onChange={e => handleInputChange(e)} value={generatorConfig.initialSeed} />
            <input id="iterations" name="iterations" type="number" placeholder="#" onChange={e => handleInputChange(e)} value={generatorConfig.iterations} />
            <Generators names={generatorConfig.availableGenerators} selected={generatorConfig.selectedGenerator} onChange={handleInputChange} />
            <GeneratorModifier selectedDistribution={generatorConfig.distribution} onChange={handleInputChange} />
            <input type="submit" value="Generate Sequence" />
        </form>
        <Context
            sequence={generatorConfig.numbers}
            {...contextConfig}
        />
        <p style={`display: ${generatorConfig.elapsedTime ? '' : 'none'}; color: dimgrey;`}>Generated in: {generatorConfig.elapsedTime} ms</p>
    </div>
)

const mapStateToProps = (state) => (
    {
        generatorConfig: state.generator,
        contextConfig: state.context
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        generateRandoomness: () => { dispatch(generateRandoomness()) },
        handleInputChange: event => { dispatch(generatorUpdateConfig(event)) }
    }
)

const Randoom = connect(
    mapStateToProps,
    mapDispatchToProps)(RandoomComponent)

export default Randoom
