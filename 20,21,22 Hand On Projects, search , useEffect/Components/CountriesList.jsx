// import data from "../data";
import { useState } from "react";
import CountryCard from "./CountryCard";

function CountriesList({ query }) {
  let [data, setData] = useState([]);

  if (data.length === 0) {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <>
      <div className="countries-container">
        {data
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                population={country.population.toLocaleString("en-IN")}
                Region={country.region}
                Capitals={country.capital}
                flags={country.flags.svg}
              />
            );
          })}
      </div>
    </>
  );
}

export default CountriesList;
