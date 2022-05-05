import React, { useState, useEffect} from 'react'
import SearchWeather from './Components/Search/SearchWeather'
import './App.css'
import Forecast from './Components/Forecast/Forecast'

function App() {

  const [search, setSearch ] = useState("london");
  const [dataCity, setDataCity] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    const responseApi = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=04b3761be33b332bbf10de5fa1be68ef`)
      .then(result => result.json())
      .then(data => setDataCity(data))
    }
    responseApi();
  },[search] )

  function handleSubmit(e){
    e.preventDefault();
    setSearch(input)
    // setSearch("")
  }

  // console.log(dataCity);

  return (
    <div className='App'>
      <h1 className='text-white'>Weather App</h1>
      <hr></hr>
      <SearchWeather input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <Forecast dataCity={dataCity} />
    </div>
  )
}

export default App