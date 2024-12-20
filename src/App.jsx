import React from 'react'
import "./App.css"
import Navbar from './Navbar/Navbar'
import Nav from './Navbar/Nav'
import Section_1 from './Section_1/Section_1'
import Section_2 from './Section_2/Section_2'
import Section_3 from './Section_3/Section_3'
import Section_4 from './Section_4/Section_4'
const App = () => {
  return (
    <div>
        <Nav/>
        <Navbar/>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        <Section_4/>
    </div>
  )
}

export default App
