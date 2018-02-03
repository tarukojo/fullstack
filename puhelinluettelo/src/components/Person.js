import React from 'react'

const Person = ({person, deletePerson}) => {
    return (
        <tr>
            <td key={person.name}>
            {person.name} {person.phone}
            <button onClick={() => deletePerson(person.id)}>poista</button>           
            </td>
        </tr>
    )
}

export default Person