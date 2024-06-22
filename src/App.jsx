import { useState, useRef , useEffect} from 'react'
import usePlaceWeather from './hooks/usePlaceWeather'

function App() {

  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [country, setCountry] = useState('')
  const [serCity, setSerCity] = useState('Bhubaneswar')
  const [temp, setTemp] = useState('')
  const [condition, setCondition] = useState('')
  const [img, setImg] = useState('')
  const inputSearch = useRef(null)
  const data = usePlaceWeather(serCity)
  
  const handleSearch = ()=>{
    if (inputSearch.current) {
      setSerCity(inputSearch.current.value);
      inputSearch.current.value = '';
    }
  }
  
  useEffect(() => {
    if (data && data.current) {
      setCity(data.location.name);
      setRegion(data.location.region);
      setCountry(data.location.country);
      setTemp(data.current.temp_c);
      setCondition(data.current.condition.text);
      setImg(data.current.condition.icon);
    }
  }, [data])
  

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
          <div className="mb-4 flex gap-2">
            <input
              ref={inputSearch}
              type="text"
              placeholder="Search city"
              className="w-full p-2 border outline-none rounded-full"
            />
            <button
              onClick={handleSearch}
              className="  p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Search
            </button>
          </div>
          <div className="text-center mb-4">
            <h1 className="text-xl font-semibold">
              {city}
            </h1>
            <p className='text-gray-800'>{region}, {country} </p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-4xl">
                {temp}°c
              </div>
              <p className="text-lg">
                {condition}
              </p>
            </div>
            <div>
              <img
                src={img}
                alt="Weather Icon" className="w-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
