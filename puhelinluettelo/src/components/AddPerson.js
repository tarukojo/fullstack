import React from 'react'

const AddPerson = ({newName, handleNameChange, newPhone, handlePhoneChange, addName}) => {
    return (
        <div>
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