import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryData = () => {
  const [countryData, setCountryData] = useState({})
  const [countryCodes, setCountryCodes] = useState([])
  const [currentCountryCode, setCurrentCountryCode] = useState('GB')

  useEffect(() => {
    fetchCountryCodes()
  }, [])

  const fetchCountryData = async country => {
    const result = await axios(
      `https://thevirustracker.com/free-api?countryTotal=${country}`
    )

    setCountryData(result.data.countrydata[0])
  }

  const fetchCountryCodes = async () => {
    const result = await axios(`https://restcountries.eu/rest/v2/all`)

    setCountryCodes(result.data)
  }

  const onSubmit = e => {
    e.preventDefault()
    fetchCountryData(currentCountryCode)
  }

  const onChange = e => {
    setCurrentCountryCode([e.target.value])
  }

  return (
    <>
      <h1 className="mt-3">Country Statistics</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="codes">Select a country code</label>
          <select
            name="codes"
            className="form-control"
            onChange={onChange}
            value={currentCountryCode}
          >
            {countryCodes.map(code => {
              return (
                <option key={code.alpha2Code} value={code.alpha2Code}>
                  {code.alpha2Code}
                </option>
              )
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Total Cases
          <span className="badge badge-primary badge-pill">
            {countryData.total_cases}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Recovered
          <span className="badge badge-primary badge-pill">
            {countryData.total_recovered}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Unresolved
          <span className="badge badge-primary badge-pill">
            {countryData.total_unresolved}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Deaths
          <span className="badge badge-primary badge-pill">
            {countryData.total_deaths}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          New Cases Today
          <span className="badge badge-primary badge-pill">
            {countryData.total_new_cases_today}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          New Deaths Today
          <span className="badge badge-primary badge-pill">
            {countryData.total_new_deaths_today}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Active Cases
          <span className="badge badge-primary badge-pill">
            {countryData.total_active_cases}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Serious Cases
          <span className="badge badge-primary badge-pill">
            {countryData.total_serious_cases}
          </span>
        </li>
      </ul>
    </>
  )
}

export default CountryData
