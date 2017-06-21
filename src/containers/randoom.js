import { h } from 'preact'

import { connect } from 'preact-redux'

import {
    generateSequence,
    generatorUpdateIterations,
    generatorChange
} from '../actions/generator.js'

import Context from '../components/context.jsx'
import Generators from '../components/generators.jsx'

const RandoomComponent = ({ initialSeed, numberOfIteration, numbers, elapsedTime, contextConfig, availableGenerators, selectedGenerator, onGenerateSequence, onIterationsChange, onChangeGenerator }) => (
    <div>
        <input id="seed" type="number" placeholder="seed" value={initialSeed} />
        <input id="iterations" onChange={() => onIterationsChange(document.getElementById('iterations').value)} type="number" placeholder="#" value={numberOfIteration} />
        <Generators names={availableGenerators} selected={selectedGenerator} onChange={onChangeGenerator} />
        <button onClick={() => onGenerateSequence(document.getElementById('seed').value)}>generate sequence</button>
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
        numberOfIteration: state.generator.numberOfIteration,
        numbers: state.generator.numbers,
        availableGenerators: state.generator.availableGenerators,
        selectedGenerator: state.generator.selectedGenerator,
        contextConfig: state.context,
        elapsedTime: state.generator.elapsedTime
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onGenerateSequence: (seed, iterations) => { dispatch(generateSequence(seed, iterations)) },
        onIterationsChange: (iterations) => { dispatch(generatorUpdateIterations(iterations)) },
        onChangeGenerator: (generator) => { dispatch(generatorChange(generator)) }
    }
)

const Randoom = connect(
    mapStateToProps,
    mapDispatchToProps)(RandoomComponent)

export default Randoom
