import React from 'react'

const Person = ({person}) => {
    return (
        <tr>
            <td key={person.name}>{person.name} {person.phone}</td>
        </tr>
    )
}

export default Person