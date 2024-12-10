import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Main from './pages/Main'
import Default from './layouts/Default'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/main' element={<Main />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App