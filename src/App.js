import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Character from './components/Character';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const fetchItems = async () => {
          const result = await axios(`https://www.breakingbadapi.com/api/characters`);

          console.log(result.data);
          setItems(result.data);
          setIsLoading(false);
      }

      fetchItems();
  }, [])

  return(
    <div className='container'>
      <Header />
      {items.map(item => (
        <Character key={item.id} name={item.name} />
      ))}
    </div>
  );
}

export default App;
