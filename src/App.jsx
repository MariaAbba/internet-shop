import { useEffect } from 'react'
import Home from './pages/Home'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
