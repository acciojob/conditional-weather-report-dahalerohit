
import react from 'react'

function WeatherDisplay({weather}) {
const tempColour = weather.temprature > 20 ? "red" : "blue";


return (

    <div>
    <p>
      Temprature:{" "}
      <span style={{color: tempColour}}>
        {weather.temprature}
        </span>  
    </p>
    <p>
      condition: {weather.condition}  
    </p>
    </div>
);


}
export default WeatherDisplay;
