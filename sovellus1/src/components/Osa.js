import React from 'react'

const Osa = ({osa}) => {
    return (
        <tr>
            <td key={osa.id}>{osa.nimi} {osa.tehtavia}</td>
        </tr>
    )
}

export default Osa