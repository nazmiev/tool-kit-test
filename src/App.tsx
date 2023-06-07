import { useState } from 'react'
import './App.css'

const TOKEN = import.meta.env.VITE_TOKEN;


function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
