import React from 'react'
import Person from './Person'

const Numerot = ({filter, filteredPersons, persons, deletePerson}) => {
    return (
        <div>
            <h2>Numerot</h2>
            <table>
                <tbody>
                    {filter !== ''? filteredPersons.map(person => <Person key={person.name} person={person} />):
                    persons.map(person =>  <Person key={person.name} person={person} deletePerson={deletePerson} />) }
                </tbody>
            </table>
        </div>
        
    )
}

export default Numerot

