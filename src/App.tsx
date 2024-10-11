import { bible } from '@/bible'
import { doStuff } from '@/lib'
import React, { useState } from 'react'

import './app.css'

const App = () => {
  const [showResult, setShowResult] = useState(false)
  const [length, setLength] = useState(0)

  return (
    <main>
      <div>
        <input
          placeholder='Lengde'
          type='text'
          onChange={(event) => {
            setLength(parseInt(event.target.value))
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setShowResult(true)
          }}
        >
          Vis resultat
        </button>
      </div>
      {showResult && <div>{Object.entries(doStuff(bible, length)).length}</div>}
    </main>
  )
}

export default App
