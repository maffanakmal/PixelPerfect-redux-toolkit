import { useState } from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import { Axios } from 'axios'
import Counter from './features/counter/Counter'
import User from './features/counter/User'
import './App.css'

function App() {
  return (
    <>
      <main className="App">
        <Counter/>
        <User/>
        <div className='footer'>
            <span>Made With ❤ By Pixel Perfect</span>
        </div>
      </main>
    </>
  )
}

export default App
