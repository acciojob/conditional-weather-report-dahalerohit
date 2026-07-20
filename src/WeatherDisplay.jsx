
import React from 'react'

function WeatherDisplay({weather}) {
const tempColour = weather.temperature > 20 ? "red" : "blue";


return (

    <div>
    <p>
      Temperature:{" "}
      <span style={{color: tempColour}}>
        {weather.temperature}
        </span>  
    </p>
    <p>
      Conditions: {weather.Conditions}  
    </p>
    </div>
);


}
export default WeatherDisplay;
