import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Components/Bannner/Banner'
import About from './Components/About/About'
import Network from './Components/Network/Network'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
   <Banner/>
    </div>
    </>
  )
}

export default App
