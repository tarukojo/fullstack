import React from 'react'

const Person = ({person, deletePerson}) => {
    return (
        <tr>
            <td key={person.name}>
            {person.name} </td><td>{person.phone} </td>
            <td>
            <button onClick={() => deletePerson(person.id)}>poista</button>           
            </td>
        </tr>
    )
}

export default Person