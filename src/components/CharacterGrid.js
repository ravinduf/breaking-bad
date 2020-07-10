import React from 'react';
import Character from './Character';

const CharacterGrid = ({items, isLoading }) => {
    return isLoading ? <h1>Loading...</h1> : <section className="cards">
        {items.map(item => (< Character key={item.char_id} item={item} />))}
    </section>
}

export default CharacterGrid
