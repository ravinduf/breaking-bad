import React, { useState } from 'react'

const Search = () => {
    return (
        <section className='search'>
            <input type="text" 
                className='form-control' 
                placeholder="Search characters" 
                autoFocus 
            />
        </section>
    )
}

export default Search
