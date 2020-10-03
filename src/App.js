import React, { useState } from 'react';
import './App.css';
import GameCont from './GameContainer';
import citySearch from './components/citySearch';

const api = 'https://www.n2yo.com/rest/v1/satellite/above'
const apiKey = 'apiKey=F5RE77-M2R479-PZBENT-4KEA'
// 51.05/-114.08/0/50/0?apiKey=F5RE77-M2R479-PZBENT-4KEA
// format: lat/long/altitude/search radius (degrees) / category (0 = all)

function App() {
  const cities = {
    calgary: {
      name: 'Calgary',
      lat: 51.04,
      long: -114.08,
    },
    lima: {
      name: 'Lima',
      lat: -12.05,
      long: -77.04,
    },
  }

  const [location, setLocation] = useState('')
  const [satList, setSatList] = useState(null)

  const getSats = async (city) => {
    // setLocation(city);
    const lat = cities[city].lat;
    const long = cities[city].long;
    console.log('get satellites', cities[city].name, lat, long);
    const sats = await fetch(`${api}/${lat}/${long}/0/45/0?${apiKey}`)
    let data = await sats.json()
    console.log('sats :>> ', data);
    setSatList(data)
  }
  let satellites;

  if (satList) {
     satellites = satList.above.map((sat) => {
      return <li key={sat.satid}>{sat.satname}</li>

    })
  }



  return (
    <div className="App">
      <header className="App-header">
        <h2>Choose your location</h2>
        <button onClick={() => getSats('calgary')}>Calgary</button>
        <button onClick={() => getSats('lima')}>Lima</button>
        <ol>
          {satellites}
        </ol>

      </header>
      <GameCont/>
    </div>
  );
}

export default App;
