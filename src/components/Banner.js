import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Banner() {
  const [search, setSearch] = useState("");
  const [houses, setHouses] = useState([]);
  // const [filterHouse, setFilterHouse] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/houses").then((res) => {
  //     setHouses(res.data);
  //   });
  // }, []);
  // useEffect(() => {
  //   setFilterHouse(
  //     houses.filter((house) => {
  //       return house.location.toLowerCase().includes(search.toLowerCase());
  //     })
  //   );
  // }, [search, houses]);

  return (
    <div className="banner">
      <div className="banner1">
        <h1>Discover a place you'll love to live {search}</h1>
        <input
          placeholder="   Find house by location..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <i classname="fas fa-search"></i>
      </div>
    </div>
  );
}
