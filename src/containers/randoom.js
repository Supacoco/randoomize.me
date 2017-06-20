import { h } from 'preact'

import { connect } from 'preact-redux'

import {
    generateNumber,
    generateNumberFromNewSeed,
    generateSequence,
    generatorUpdateIterations
} from '../actions/generator.js'

import Seed from '../components/seed.jsx'
import Context from '../components/context.jsx'
import Sequence from '../components/sequence.jsx'

const RandoomComponent = ({ initialSeed, numberOfIteration, numbers, elapsedTime, contextConfig, onGenerate, onGenerateSequence, onIterationsChange }) => (
    <div>
        <input id="seed" type="number" placeholder="seed" value={initialSeed} />
        <input id="iterations" onChange={() => onIterationsChange(document.getElementById('iterations').value)} type="number" placeholder="#" value={numberOfIteration} />
        <button onClick={() => onGenerate()}>generate</button>
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
        <p style={`display: ${elapsedTime ? '' : 'none'}`}>Generated in: {elapsedTime} ms</p>
        {/*<Seed seed={initialSeed} dispatchGenerate={onGenerate} dispatchGenerateWithNewSeed={onGenerateWithNewSeed} />*/}
        <Sequence numbers={numbers} />
    </div>
)

const mapStateToProps = (state) => (
    {
        initialSeed: state.generator.initialSeed,
        numberOfIteration: state.generator.numberOfIteration,
        numbers: state.generator.numbers,
        contextConfig: state.context,
        elapsedTime: state.generator.elapsedTime
    }
)


const mapDispatchToProps = (dispatch) => (
    {
        onGenerate: () => { dispatch(generateNumber()) },
        onGenerateSequence: (seed, iterations) => { dispatch(generateSequence(seed, iterations)) },
        onIterationsChange: (iterations) => { dispatch(generatorUpdateIterations(iterations)) }
    }
)

const Randoom = connect(
    mapStateToProps,
    mapDispatchToProps)(RandoomComponent)

export default Randoom
