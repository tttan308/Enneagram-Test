import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation'

import Home from './pages/Home'
import Type from './pages/Type'
import Information from './pages/Information'
import Documents from './pages/Documents'
import Forum from './pages/Forum'

function App() {
  return (
    <div class="grid h-screen bg-gradient-to-r from-cyan-700 to-violet-700 ">
      {/* <div class="bg-white rounded-lg w-[95%] justify-self-center mt-20"> */}
      <Router>
        <Navigation />
        <Routes>
          <Route path='Enneagram/' element={<Home />}/>
          <Route path='Enneagram/type' element={<Type />}/>
          <Route path='Enneagram/documents' element={<Documents />}/>
          <Route path='Enneagram/information' element={<Information />}/>
          <Route path='Enneagram/forum' element={<Forum />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App