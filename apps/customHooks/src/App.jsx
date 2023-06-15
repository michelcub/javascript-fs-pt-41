import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import useAppContext from './context/AppContext'

function App() {
  const context = useAppContext();

  console.log(context)

  return (
    <>

    </>
  )
}

export default App
