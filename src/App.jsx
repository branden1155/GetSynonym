import { useState } from 'react'
import './App.css'

function App() {

  //API URL
  const API_URL = "https://api.datamuse.com/words?rel_syn="

  //States to store the word from input, and the array of words called from API.
  const [word, setWord] = useState("")
  const [syn, setSyn] = useState([])

  //Submit Form
  const submitForm = (e) => {
    e.preventDefault();

    //Fetch information, set an array inside the state.
    fetch(`${API_URL}${word}`)
    .then((res) => res.json())
    .then(setSyn);
  }

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <label>Get Synonym:</label>
        <input value={word} onChange={(e) => setWord(e.target.value)}></input>
        <button>Submit</button>
      </form>
      <ul>
        {syn.map(syn => <ul>
          {syn.word}
        </ul>)}
      </ul>
    </div>
  )
}

export default App
