import React from 'react'

const Countries = ({countries}) => {
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
            <p key={country.alpha3Code}>{country.name}</p>
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
