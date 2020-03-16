import React from 'react'
import './app.scss'
import GlobalData from './GlobalData'
import CountryData from './CountryData'

const App = () => {
  return (
    <div className="container mt-5">
      <GlobalData />
      <CountryData />
    </div>
  )
}

export default App
