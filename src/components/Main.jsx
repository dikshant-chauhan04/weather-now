import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { useGetWeatherQuery } from "../store/services/weatherData";
import { useGetIpInfoQuery } from "../store/services/ipLocation";
import { useGetUserIpQuery } from "../store/services/fetchUserIp";
import toast from "react-hot-toast";
import "../App.css";

function Main() {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const { data: ip } = useGetUserIpQuery();
  const { data:loc,error:ipLocationError, refetch} = useGetIpInfoQuery(ip?.ip, {skip: !ip?.ip});
  const {
    data,
    error,
    isLoading,
  } = useGetWeatherQuery(city, { skip: !city });
  
  function searchCity(name) {
    setCity(name);
  }

  useEffect(() => {
    if (ip?.ip) {
      if(ipLocationError){
        setCity('delhi');
      setLoading(false);
      }
      else{
        refetch();
        setCity(loc?.data.location.city.name);
      }
    }
  }, [ip, loc, ipLocationError,refetch]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
    if (error) {
      setLoading(false);
      toast.error(error?.data.message);
    }
  }, [city, data, error]);

  if (loading === true) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-row space-x-8">
        <div className="text-4xl font-bold"> Loading </div>
        <span className="loader"></span>
        </div>
      </div>
    );
  }

  return (
    <WeatherCard
      data={data}
      isLoading={isLoading}
      searchCity={searchCity}
    />
  );
}

export default Main;
