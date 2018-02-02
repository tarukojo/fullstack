import React from 'react'

const FilterInput = ({filter, handleFilter}) => {
    return (
        <div>
            rajaa näytettäviä: 
            <form>
                <input value={filter} onChange={handleFilter} />
            </form>
            <p/>
        </div>
        
    )
}

export default FilterInput