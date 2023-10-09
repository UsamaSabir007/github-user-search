import { useState, useEffect } from 'react';
import Form from './components/Form';
import Users from './components/Users';
import './App.css';

function App() {
  const [results, setResults] = useState([])
  const apiURL = "https://api.github.com"


  const searchResults = async (input) => {
    const res = await fetch(`${apiURL}/search/users?q=${input}`);
    const data = await res.json();
    setResults(data.items)
  }

  return (
    <div>
      <div className='container'>
        <h2>GitHub User Search</h2>
        <Form searchResults={searchResults} />
        <h3>Results</h3>
        <Users results={results} /> 
      </div>
    </div>
  );
}

export default App;
