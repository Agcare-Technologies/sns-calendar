import { useState } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import January from './pages/January'
import March from './pages/March'
import April from './pages/April'
import May from './pages/May'
import June from './pages/June'
import July from './pages/July'
import August from './pages/August'
import September from './pages/September'
import October from './pages/October'
import November from './pages/November'
import December from './pages/December'
import Febuary from './pages/Febuary'



function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    
    <Routes>
      <Route exact path = "/" element = {<HomePage /> } />
      <Route exact path = "/home" element = {<HomePage /> } />
      <Route path = "jan" element = {<January  /> } />
      <Route path = "feb" element = {<Febuary /> } />
      <Route path = "mar" element = {<March /> } />
      <Route path = "apr" element = {<April /> } />
      <Route path = "may" element = {<May /> } />
      <Route path = "jun" element = {<June /> } />
      <Route path = "jul" element = {<July /> } />
      <Route path = "aug" element = {<August /> } />
      <Route path = "sep" element = {<September /> } />
      <Route path = "oct" element = {<October /> } />
      <Route path = "nov" element = {<November /> } />
      <Route path = "dec" element = {<December /> } />
    </Routes>
    
  )
}

export default App
