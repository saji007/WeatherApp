import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat: lat, lon: lon });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectUnit = e.target.name;
    if (units !== selectUnit) setUnits(selectUnit);
  };

  return (
    <div className="flex flex-row justify-center my-3">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
          onClick={handleLocation}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125 "
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-lg text-white mx-3">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125 "
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
