import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useState } from 'react';

const WeatherBox = () => {

  const [weatherData, setWeatherData] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleCityChange = (city => {
    setError(false);
    setPending(true);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b259e14a6f0994523bbb4ca37b458b69&units=metric`)

      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(data => {
              const weatherData = {
                city: data.name,
                temp: data.main.temp,
                icon: data.weather[0].icon,
                description: data.weather[0].main
              };
              setPending(false)
              setWeatherData(weatherData)
            })
        } else {
          setError(true);
        }
      })
  });

  return (
    <section>
      <PickCity action={handleCityChange} />
      {weatherData && !pending && <WeatherSummary {...weatherData} />}
      {pending && !error && <Loader />}
      {error && <ErrorBox />}
    </section>
  )
};
export default WeatherBox;