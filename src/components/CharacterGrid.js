import React from 'react';
import Character from './Character';
import spinner from '../img/spinner.gif';

const CharacterGrid = ({items, isLoading }) => {
    return isLoading ? <img 
        src={spinner} 
        style={{ width: '200px', margin: 'auto', display: 'block'}} 
        alt="Loading .." 
        /> 
        : 
        <section className="cards">
        {items.map(item => (< Character key={item.char_id} item={item} />))}
    </section>
}

export default CharacterGrid
