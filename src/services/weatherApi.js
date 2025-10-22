import { API } from "../config/constants";

export async function fetchCityTempCelsius(city) {
  const url = `${API}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `OpenWeather error ${res.status}: ${text || res.statusText}`
    );
  }

  const data = await res.json();
  const temp = Number(Number(data?.main?.temp).toFixed(1));

  if (Number.isNaN(temp)) {
    throw new Error("Temperature not found in API response");
  }

  return temp;
}
