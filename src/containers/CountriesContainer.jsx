import React, { useState, useEffect } from 'react';
import CountryItem from '../components/CountryItem';
import CountrySelector from '../components/CountrySelector';
import FavouriteCountries from '../components/FavouriteCountries';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState('')

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = function () {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries));
    };

    const handleCountrySelected = cca3 => {
        setSelectedCountryCCA3Code(cca3)
    };

    const handleFavouriteToggle = (cca3) => {
        const updatedCountries = countries.map((country) => {
            return country.cca3 === cca3 ? {...country, isFavourite: !country.isFavourite} : country
        })
        setCountries(updatedCountries)
    }

    const selectedCountry = countries.find(country => country.cca3 === selectedCountryCCA3Code)

    const totalPopulation = countries.reduceRight((total, country) => {
        return total + country.population
    }, 0)


    return (
        <>
            <h2>countries</h2>
            <p>🌎 population: {totalPopulation}
            </p>
            <CountrySelector countries={countries} onCountrySelected={handleCountrySelected}/>
            <CountryItem country={selectedCountry} onFavouriteToggle={handleFavouriteToggle}/>
            <FavouriteCountries countries={countries}/>

        </>
    )
}

export default CountriesContainer;