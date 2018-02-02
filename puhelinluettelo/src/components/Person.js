import React from 'react'

const Person = ({person}) => {
    return (
        <tr>
            <td key={person.name}>{person.name}</td>
        </tr>
    )
}

export default Person