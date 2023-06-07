import { useState } from 'react'
import './App.css'
import tokenTest from './utils/utils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{tokenTest}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
