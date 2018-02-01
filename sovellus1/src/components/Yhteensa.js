import React from 'react'

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const Yhteensa = ({ osat }) => {
    const tehtavat = osat.map(osa => osa.tehtavia)
    const yhteensa = tehtavat.reduce(reducer)
    return (
        <div>
            Yhteensä: {yhteensa}
        </div>
    )
}

export default Yhteensa