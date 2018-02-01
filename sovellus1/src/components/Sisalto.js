import React from 'react'
import Osa from './Osa'

const Sisalto = ({ osat }) => {
    return (
        <div>
            <table>
                <tbody>
                    {(osat).map(osa => <Osa key={osa.id} osa={osa} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Sisalto