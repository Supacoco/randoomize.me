import { h } from 'preact'

const Seed = ({ seed, dispatchGenerate, dispatchGenerateWithNewSeed }) => (
    <div>
        <label for="seed" />
        <input id="seed" name="seed" type="text" value={seed} />
        <button onClick={() => dispatchGenerate()}>generate</button>
        <button onClick={() => dispatchGenerateWithNewSeed(document.getElementById('seed').value)}>new seed & generate</button>
    </div>
)

export default Seed
