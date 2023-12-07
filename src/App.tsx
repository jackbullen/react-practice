import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import metaverseLogo from './assets/metaverse.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(27)
  const [count2, setCount2] = useState(421)
  const [count3, setCount3] = useState(5173)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/apu52/METAVERSE" target="_blank">
          <img src={metaverseLogo} className="logo metaverse" alt="Metaverse logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="shiny">react-practice</h1>
      <div className="card">
        <div className="collatz">
          <button onClick={() => setCount((count) => count%2===0?count/2 :(3*count+1)/2)}>
            count is {count}
          </button>
        </div>
        <div className="collatz">
          <button onClick={() => setCount2((count2) => count2%2===0?count2/2 :(3*count2+1)/2)}>
            count2 is {count2}
          </button>
        </div>
        <div className="collatz">
          <button onClick={() => setCount3((count3) => count3%2===0?count3/2 :(3*count3+1)/2)}>
            count3 is {count3}
          </button>
        </div>
        <p>
          Welcome to the home page of react-practice. This is a React learning project.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more.
      </p>
    </>
  )
}

export default App