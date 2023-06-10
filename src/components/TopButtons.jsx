import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Kolkata",
    },
    {
      id: 2,
      title: "New Delhi",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Jammu",
    },
    {
      id: 5,
      title: "Chennai",
    },
  ];

  return (
    <div className="flex items-center justify-between my-4 mt-2">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
