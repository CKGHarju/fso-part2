import React, { useState, useEffect } from 'react';
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [url] = useState('https://restcountries.eu/rest/v2/all')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios.get(url).then(({data}) => setCountries(data))
  }, [url])

  useEffect(() => {
    const filtered = countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
    setFilteredCountries(filtered)
  }, [query, countries])

  return (
    <div className="App">
      <div>
        <label>Find countries</label>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <Countries countries={filteredCountries} setQuery={setQuery}/>
    </div>
  );
}

export default App;
