// import logo from './logo.svg';
import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetail from "./components/TemperatureAndDetail";
import Forecast from "./components/Forecast";
import formatWeather from "./services/weatherServices";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "New York" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await formatWeather({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBG = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const def = units === "metric" ? 20 : 60;
    if (weather.temp <= def) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`h-fit mx-auto max-w-screen-md  py-2 px-32 bg-gradient-to-br  from-cyan-700 to-blue-700  shadow-xl shadow-gray-400 ${formatBG()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetail weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      {/* <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} /> */}
    </div>
  );
}

export default App;
