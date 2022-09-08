import './CountrySelector.css'

const CountrySelector = ({ countries, onCountrySelected}) => {
    const handleChange = (ev) => {
        onCountrySelected(ev.target.value)
    }
    return (
        <select defaultValue='' onChange = {handleChange} id='country-selector'>
<option value='' disabled> choose a country </option> {
    countries.map(country => {
        return ( <option key = { country.cca3 } value = {country.cca3} >{country.flag} {country.name.common}</option>)
    })
}

        </select>
    )
} 

export default CountrySelector;