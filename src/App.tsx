import { useState } from 'react'

import './App.css'
import Attribution from './components/Attribution'
import Bottom from './components/Bottom'
import Top from './components/Top'

function App() {


  return (
    <div className="App min-h-screen">
      <div className='grid grid-row[55%_45%]'>
        <Top />

        <Bottom />
      </div>
      <Attribution />
    </div>
  )
}

export default App
