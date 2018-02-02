import React from 'react'
 
const Country = ({amount, country, handleFilterByName}) => {
    if (amount === 1) {  
        return (
            <tr><td key={country.name}>
                <h1>{country.name}</h1>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <p><img src={country.flag} width='200' alt={country.name} /></p>
            </td></tr>
        )
    } 
    if (amount > 1) {
        return (
            <tr><td key={country.name}><div onClick={() => handleFilterByName(country.name)}>{country.name}</div></td></tr>
        )
    }
}

export default Country