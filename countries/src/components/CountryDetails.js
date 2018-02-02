import React from 'react'
import Country from './Country'

const CountryDetails = ({amount, countries}) => {
    if (amount === 0 || amount > 10) { 
        return (
            <div>too many countries, specify another filter</div>
        )
    }
    if (amount >= 1 && amount < 10) {
        return (
           <div>
               <table>
                   <tbody>
                    {countries.map(country => <Country key={country.name} amount={amount} country={country}/>)}
                    </tbody>
                </table>
            </div>
        )
    }  
}

export default CountryDetails