import React from 'react';
const CountryItem = ({country, onFavouriteToggle}) => {
    if (!country) {
        return null
    };

    const handleClick = () => {
        onFavouriteToggle(country.cca3)
    }

    const favouriteBtnText = country.isFavourite ? 'remove from favourites' : 'add to favourites'

    
    return (
        <>
            <p alt='population'>π₯ {country.population}</p>
            <p alt='un-member'>πΊπ³: {country.unMember ? 'β' : 'β'}</p>
            <button onClick={handleClick}>{favouriteBtnText}</button>
        </>
    )
}

export default CountryItem