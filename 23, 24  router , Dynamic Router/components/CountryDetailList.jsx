import React from 'react'
import CountryDetail from './CountryDetail'

export default function CountryDetailList() {
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
    })
  }, [])

  return (
   
    data.map((country) => {
      console.log("this is data is country")
      return (
        <CountryDetail 
        name={country.name.common}
        />
      )
    })

  )
}
