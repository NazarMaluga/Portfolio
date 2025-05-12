import { useEffect, useState } from "react";
import axios from "axios";

export default function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.open-meteo.com/v1/forecast?latitude=50.25&longitude=31.75&current_weather=true")
      .then((response) => setWeather(response.data.current_weather));
  }, []);

  return (
    <div>
      <h1>Моє місто — Яготин.</h1>
      <p>Яготи́н — місто у Бориспільському районі Київської області України, на Придніпровській низовині, розташоване над річкою Супоєм.</p>

      {weather ? (
        <div>
          <h2>Погода зараз:</h2>
          <p>Температура: {weather.temperature}°C</p>
          <p>Швидкість вітру: {weather.windspeed} км/год</p>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </div>
  );
}
