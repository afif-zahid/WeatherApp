import React, { useEffect, useState } from 'react';
import "./css/styles.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");
    const [sun , setSun] = useState(null);
    const [image , setImage] = useState("Clouds");
    useEffect(() => {
        const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f59d12c66646f26e40c1df9c23081047&units=metric`;
            
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
            setSun(resJson.sys);
            setImage(resJson.weather);
        }

        fetchApi();
    }, [search])


    return (
            <div className='box weather' >
                <h1 className='name weather'>Weather APP</h1>
                <div className='inputData weather'>
                    <input
                        type='search'
                        className='inputFeild'
                        placeholder='Search'
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} 
                        />
                </div>
                
                {
                    !city ? (
                        <p className='errorMsg weather'> No data found</p>
                    ) : (
                        <div className='weather'>
                            <div className='info weather'>
                                <h2 className='location weather'>
                                    <i className="fas fa-location-dot weather"></i> {search}
                                </h2>

                                <h1 className='temp weather'>
                                    {city.temp} &#176;cel
                                </h1>
                                <h3 className='tempmin_max weather'>
                                   <p className='weather'> Min : {city.temp_min} &#176;cel </p> 
                                   <p className='weather'>Max : {city.temp_max} &#176;cel </p>
                                   <p className='weather'>  Feels Like : {city.feels_like} &#176;cel </p>
                                </h3>
                                <h3 className='weather'>
                                    <p className='weather'> Sun Rise : {new Date(sun.sunrise * 1000).toLocaleTimeString()}</p>
                                    <p className='weather'> Sun Set : {new Date(sun.sunset * 1000).toLocaleTimeString()} </p>
                                </h3>
                            </div>
                           
                        </div>
                    )
                }

            </div>
        
    )
}

export default Tempapp;