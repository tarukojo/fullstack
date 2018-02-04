import React from 'react'

const AddPerson = ({newName, handleNameChange, newPhone, handlePhoneChange, addName}) => {
    return (
        <div>
            <h2>Lisää uusi / Muuta olemassa olevan numeroa</h2>
            <form onSubmit={addName}>
            <div>
            nimi: <input
            value={newName}
            onChange={handleNameChange} 
            />
            </div>
            <div>
            numero: <input 
            value={newPhone}
            onChange={handlePhoneChange}
            />
            </div>
            <div>
            <button type="submit">lisää</button>
            </div>
            </form>
        </div>
        
    )
}

export default AddPerson