import React from 'react'

const Country = ({amount, country}) => {
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
            <tr><td key={country.name}>{country.name}</td></tr>
        )
    }
}

export default Country