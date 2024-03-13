import React from 'react'
import './CountryListShimmer.css'

export default function CountryListShimmer() {
  return (
    <div className='countries-container'>

      {Array.from({length: 15}).map((el, i)=>{
        return <div key={i} className='country-card shimmer-card'></div>
      })}
      
    </div>
  )
}
