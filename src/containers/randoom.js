import { h } from 'preact'

import { connect } from 'preact-redux'

import { generatorUpdateConfig } from '../actions/generator.js'
import { generateRandoomness } from '../thunks/generator.js'

import Context from '../components/context.jsx'
import Generators from '../components/generators.jsx'
import GeneratorModifier from '../components/generatorModifier.jsx'

const RandoomComponent = ({ initialSeed, iterations, numbers, distribution, elapsedTime, contextConfig, availableGenerators, selectedGenerator, handleInputChange, generateRandoomness }) => (
    <div>
        <form onSubmit={e => { e.preventDefault(); generateRandoomness() }}>
            <input id="initialSeed" name="initialSeed" type="number" placeholder="seed" onChange={e => handleInputChange(e)} value={initialSeed} />
            <input id="iterations" name="iterations" placeholder="#" onChange={e => handleInputChange(e)} type="number" value={iterations} />
            <Generators names={availableGenerators} selected={selectedGenerator} onChange={handleInputChange} />
            <GeneratorModifier onChange={handleInputChange} selectedDistribution={distribution}/>
            <input type="submit" value="Generate Sequence" />
        </form>
        <Context
            sequence={numbers}
            viewBox={contextConfig.viewBox}
            dotSize={contextConfig.dotSize}
            dotColor={contextConfig.dotColor}
            bgColor={contextConfig.backgroundColor}
            width={contextConfig.width}
            height={contextConfig.height}
        />
        <p style={`display: ${elapsedTime ? '' : 'none'}; color: dimgrey;`}>Generated in: {elapsedTime} ms</p>
    </div>
)

const mapStateToProps = (state) => (
    {
        initialSeed: state.generator.initialSeed,
        iterations: state.generator.iterations,
        distribution: state.generator.distribution,
        numbers: state.generator.numbers,
        availableGenerators: state.generator.availableGenerators,
        selectedGenerator: state.generator.selectedGenerator,
        contextConfig: state.context,
        elapsedTime: state.generator.elapsedTime
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
