
import React, {useEffect, useState } from 'react'
import WeatherDisplay from '../WeatherDisplay'

function App() {
const [weather, setWeather] = useState({
  temperature:25,
  conditions: "Sunny",
});

useEffect(() => { 

}, []);

return (
<WeatherDisplay weather={weather}/>
);
}

export default App;
