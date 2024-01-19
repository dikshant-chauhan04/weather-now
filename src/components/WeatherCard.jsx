import React, { useState} from "react";
import "../App.css";
import { Wind, GaugeCircle, SunMedium, Droplets } from "lucide-react";

function WeatherCard({ data, isLoading, searchCity }) {
  const [city, setCity] = useState("");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <section className="min-h-screen dark:bg-gray-950">
      <div className="h-auto max-w-xl mx-auto space-y-4 flex flex-col items-center justify-evenly px-6 py-3">
        <div className="flex flex-row w-full space-x-3 px-1">
          <input
            id="place"
            name="place"
            type="place"
            autoComplete="none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="min-w-0 flex-auto border border-zinc-200 outline-none px-2.5 py-2 rounded-md dark:text-white shadow-sm focus:shadow-md transition-shadow duration-300 bg-white/5  "
            placeholder="Search city"
          />
          <button
            type="submit"
            onClick={() => {
              searchCity(city);
              setCity("");
            }}
            disabled={isLoading}
            className="flex-none rounded-md bg-orange-500 dark:bg-orange-500 py-1 px-4 text-sm font-semibold 
          text-white shadow-sm hover:bg-orange-600 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
           focus-visible:outline-orange-300 transition-all duration-200"
          >
            {isLoading ? "Searching" : "Search"}
          </button>
        </div>
        <div className="h-full w-full border grid grid-rows-2 border-zinc-200  dark:bg-gray-900 shadow rounded-lg">
          {!isLoading && (
            <>
              {data?.weather.map((icon, index) => (
                <div
                  key={index}
                  className="flex flex-row w-full pr-16 items-center justify-between dark:text-white"
                >
                  <img
                    src={`https://openweathermap.org/img/wn/${
                      icon.icon ? icon.icon : "10d"
                    }@4x.png`}
                    alt="weather img"
                  />
                  <div className="flex flex-col space-y-3">
                    <p className="capitalize font-medium text-xl">
                      {icon.description}
                    </p>
                    <p className="text-4xl font-semibold">
                      {data?.main.temp}°C
                    </p>
                    <div className="space-x-4 flex flex-row font-medium text-xs">
                      {" "}
                      <p>Min: {data?.main.temp_min}°C</p>{" "}
                      <p>Max: {data?.main.temp_max}°C</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="space-y-4 dark:text-white">
                <h1 className="font-bold text-5xl">{data?.name}</h1>
                <div className="grid grid-rows-2 grid-cols-2 gap-2 p-2 py-3">
                  <div className="border  p-2 shadow-md rounded-md flex flex-row justify-between items-center">
                    <Wind size={40} />
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-100">
                        Wind speed
                      </p>
                      <p>{data?.wind.speed}m/s</p>
                    </div>
                  </div>
                  <div className="border  p-2 shadow-md rounded-md flex flex-row justify-between items-center">
                    <SunMedium size={40} />
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-100">
                        Sunrise & Sunset
                      </p>
                      <p>
                        {getTime(data?.sys.sunrise)}↑{" "}
                        {getTime(data?.sys.sunset)}↓
                      </p>
                    </div>
                  </div>
                  <div className="border  p-2 shadow-md rounded-md flex flex-row justify-between items-center">
                    <GaugeCircle size={40} />
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-100">
                        Pressure
                      </p>
                      <p>{data?.main.pressure}Pa</p>
                    </div>
                  </div>
                  <div className="border  p-2 shadow-md rounded-md flex flex-row justify-between items-center">
                    <Droplets size={40} />
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-100">
                        Humidity
                      </p>
                      <p>{data?.main.humidity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
