import {useEffect, useState } from 'react'
import WeatherDisplay from '../WeatherDisplay'

function App() {
const [weather, setWeather] = useState({
  temperature:25,
  condition: "sunny",
});

useEffect(() => { 

}, []);

return (
<WeatherDisplay weather={weather}/>
);
}

export default App;
