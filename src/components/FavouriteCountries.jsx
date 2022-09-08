const FavouriteCountries = ({ countries, onCountrySelected }) => {
    const favouriteCountries = countries.filter(country => country.isFavourite)

    return (
        <>
          <h3>fave countries</h3>
          <ul>
            {favouriteCountries.map(country => {
              return (
                <li key={country.cca3}>
                  <button onClick={() => onCountrySelected(country.cca3)}>{country.name.common}</button>
                </li>
              )
            })}
          </ul>
        </>
      )
    }

export default FavouriteCountries;