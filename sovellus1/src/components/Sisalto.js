import React from 'react'
import Osa from './Osa'

const Sisalto = ({ kurssi }) => {
    return (
        <div>
            <table>
                <tbody>
                    {(kurssi.osat).map(osa => <Osa key={osa.id} osa={osa} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Sisalto