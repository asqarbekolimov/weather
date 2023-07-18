import React, { useState } from "react";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./context";
import BackgroundLayout from "./components/background-layout";
import WeatherCard from "./components/weather-card";
import MiniCard from "./components/mini-card";

const App = () => {
  const [input, setInput] = useState("");
  const { weather, location, values, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };
  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex items-center justify-between">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="" className="w-[1.5rem] h-[1.5rem] " />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submitCity();
              }
            }}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="focus:outline-none w-full text-[#212121] text-lg"
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={location}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
