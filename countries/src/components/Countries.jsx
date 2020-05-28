import React from 'react'

const Countries = ({countries, setQuery}) => {
  if (countries.length === 0) {
    return (
      <p>No matches</p>
    )
  } else if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length > 1) {
    return (
      <div>
        {
          countries.map(country => (
            <div key={country.alpha3Code}>
              <span>{country.name}</span>
              <button onClick={() => setQuery(country.name)}>show</button>
            </div>
          ))
        }
      </div>
    )
  } else {
    const country = countries[0]
    return (
      <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h3>Languages</h3>
        <ul>
          {country.languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img style={{height: '128px'}}src={country.flag} alt={`flag of ${country.name}`}/>
      </div>
    )
  }
}

export default Countries
