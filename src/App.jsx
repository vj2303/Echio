import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import InfluencerState from './context/InfluencerState'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-[color:var(--light-grey)]'>
      <Navbar />
    <BrowserRouter>
      <InfluencerState>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
      </InfluencerState>
    </BrowserRouter>
    </div>
  )
}

export default App
