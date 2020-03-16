import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GlobalData = () => {
  const [globalData, setGlobalData] = useState({})

  useEffect(() => {
    fetchGlobalData()
  }, [])

  const fetchGlobalData = async country => {
    const result = await axios(
      `https://thevirustracker.com/free-api?global=stats`
    )

    setGlobalData(result.data.results[0])
  }

  return (
    <>
      <h1>Global Statistics</h1>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Total Cases
          <span className="badge badge-primary badge-pill">
            {globalData.total_cases}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Recovered
          <span className="badge badge-primary badge-pill">
            {globalData.total_recovered}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Unresolved
          <span className="badge badge-primary badge-pill">
            {globalData.total_unresolved}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Deaths
          <span className="badge badge-primary badge-pill">
            {globalData.total_deaths}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          New Cases Today
          <span className="badge badge-primary badge-pill">
            {globalData.total_new_cases_today}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          New Deaths Today
          <span className="badge badge-primary badge-pill">
            {globalData.total_new_deaths_today}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Active Cases
          <span className="badge badge-primary badge-pill">
            {globalData.total_active_cases}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Serious Cases
          <span className="badge badge-primary badge-pill">
            {globalData.total_serious_cases}
          </span>
        </li>
      </ul>
    </>
  )
}

export default GlobalData
