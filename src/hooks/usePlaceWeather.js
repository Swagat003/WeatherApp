import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;


function usePlaceWeather(city) {
    const [data, setData] = useState({})
    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
                .then((res) => res.json())
                .then((res) => setData(res))
        }
        fetchData();
    }, [city])
    return data;
}

export default usePlaceWeather;