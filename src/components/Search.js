import React, { useState } from 'react'

const Search = () => {
    const [text, setText] = useState('');

    return (
        <section className='search'>
            <input type="text" 
                className='form-control' 
                placeholder="Search characters"
                value={text} 
                onChange={(e) => setText(e.target.value)}
                autoFocus 
            />
            
        </section>
    )
}

export default Search
