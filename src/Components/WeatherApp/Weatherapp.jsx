import React,{useState} from 'react'
import './Weatherapp.css'
import search_icon from '../Assets/search.png'
import drizzle_icon from '../Assets/drizzle.png'
import clear_icon from '../Assets/clear.png'
import cloudy_icon from '../Assets/clouds.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import mist_icon from '../Assets/mist.png'
import wind_icon from '../Assets/wind.png'
import snow_icon from '../Assets/snow.png'
export const Weatherapp = () => {
    let key="f25b3a7c14d94c7e4ae393892a49195a";
    const [wicon,setWicon] = useState(cloudy_icon);
    const search=async()=>{
        const element =document.getElementsByClassName("CityInput");
        if(element[0].value===""){return 0;}
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${key}`;
        let response=await fetch(url);
        let data= await response.json();
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName("wind-rate");
        const temperature=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("Cityname");

        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=data.wind.speed + "Km/h";
        temperature[0].innerHTML=data.main.temp+"°C";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){setWicon(clear_icon);}
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){setWicon(cloudy_icon);}
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){setWicon(drizzle_icon);}
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){setWicon(drizzle_icon);}
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){setWicon(rain_icon);}
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){setWicon(rain_icon);}
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){setWicon(snow_icon);}
        else{setWicon(clear_icon);}
    }

  return (
    <div className='container'>
        <div className='topbar'>
            <input type="text" className='CityInput' placeholder='Search' />
            <div className='Search-icon' onClick={()=>{search()}}>
                <img src={search_icon}/>
            </div>
        </div>
        <div className='Weather-image'>
                <img src={wicon} alt="" className='wicon'/>
        </div>
        <div className="weather-temp">--°C</div>
        <div className="Cityname">-</div>
        <div className='data-container'>
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className='data'>
                    <div className='humidity-percent'>--%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className='data'>
                    <div className='wind-rate'>--Km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
