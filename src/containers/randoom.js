import { h } from 'preact'

import { connect } from 'preact-redux'

import { generateNumber, generateNumberFromNewSeed } from '../actions/generator.js'
import Seed from '../components/seed.jsx'
import Sequence from '../components/sequence.jsx'

const RandoomComponent = ({ initialSeed, numbers, onGenerate, onGenerateWithNewSeed }) => (
    <div>
        <Seed seed={initialSeed} dispatchGenerate={onGenerate} dispatchGenerateWithNewSeed={onGenerateWithNewSeed} />
        <Sequence numbers={numbers} />
    </div>
)

const mapStateToProps = (state) => (
    { 
        initialSeed: state.generator.initialSeed,
        numbers: state.generator.numbers
    }
)


const mapDispatchToProps = (dispatch) => (
    {
        onGenerate: () => { dispatch(generateNumber()) },
        onGenerateWithNewSeed: (seed) => { dispatch(generateNumberFromNewSeed(seed))}
    }
)

const Randoom = connect(
    mapStateToProps,
    mapDispatchToProps)(RandoomComponent)

export default Randoom
