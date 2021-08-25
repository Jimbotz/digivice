import React, { useState } from 'react';

const api = {
  base: `https://digimon-api.vercel.app/api/digimon/name/`,
}

const App = () => {

  const searchDigimon = (e) => {
    if(e.key === "Enter") {
      fetch(`${api.base}${digimon}`)
      .then(res => res.json())
      .then(result => {
        setInfo(result)
        console.log(result[0])
        // console.log(result[0].name)
      })
    }
  }

  const search = (e) => {
    searchDigimon(e)
  }
  
  const [digimon, setDigimon] = useState("")
  const [info, setInfo] = useState()

  return (
    <div className="App">
      <input type="text"
        className=""
        placeholder="Search city"
        onChange={e => setDigimon(e.target.value)}
        value={digimon}
        onKeyPress={search} 
        />


        {info && 
        
        <div>
          <p> {info[0].name} </p>
          <img  src={`${info[0].img}`} alt="digimon" />
          <p> {info[0].level} </p>
        </div>}
    </div>
  );
}

export default App;
