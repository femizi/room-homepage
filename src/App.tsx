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



      {/* We are available all across the globe

      With stores all over the world, it's easy for you to find furniture for your home or place of business.
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
      store locator. Any questions? Don't hesitate to contact us today.

      Shop now

      Manufactured with the best materials

      Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
      to ensure that every product is made as perfect and as consistent as possible. With three decades of
      experience in this industry, we understand what customers want for their home and office.

      Shop now */}



      <Attribution />
    </div>
  )
}

export default App
