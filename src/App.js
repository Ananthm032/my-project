import React from 'react'
import "./App.css"
import {Routes,Route} from "react-router-dom"
import Topbar from './Topbar/Topbar'
import Accepted from './Component/Accepted/Accepted'
import Header from './Header/Header/Header'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Topbar/>}>

        </Route>
        <Route path='/verified' element={<Accepted/>}>

</Route>
<Route path='/rejected' element={<Header/>}>

</Route>
      </Routes>
    </div>
  )
}

export default App
