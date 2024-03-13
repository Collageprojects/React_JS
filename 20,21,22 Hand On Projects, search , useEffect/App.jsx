import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import SelectMenu from "./Components/SelectMenu";
import CountriesList from "./Components/CountriesList";
import "./style.css";

const App = () => {
  const [query, setQuery] = useState();
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query}/>
      </main>
    </>
  );
};

export default App;
