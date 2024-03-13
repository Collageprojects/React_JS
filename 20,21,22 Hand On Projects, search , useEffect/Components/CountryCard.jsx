function CountryCard({name, population, Region , Capitals, flags }) {
// console.log(name)
  return (
    <a className="country-card" href={`/country.html?name=${name.common}`}>
          <img src={flags} alt={name + 'flags'} />
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{Region}</p>
              <p><b>Capital: </b>{Capitals}</p>
          </div>
  </a>
  )
}

export default CountryCard
