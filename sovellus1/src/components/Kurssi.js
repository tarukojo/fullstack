import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko otsikko={kurssi.nimi} />
            <Sisalto kurssi={kurssi} />
        </div>
    )
}

export default Kurssi
