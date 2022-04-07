import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/ui/Header'
import CharacterGrid from './Components/Characters/CharacterGrid'
import Search from './Components/ui/Search'
import axios from 'axios';

function App() {
  const [items, setitems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async ()=>{
      const result= await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)


      console.log(result.data);
      setitems(result.data);
      setisLoading(false);
    }
    fetchItems();

  },[query])

  

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
