import logo from './logo.svg';
import './App.css';
import data from'./MOCK_DATA.json'
import { useState } from 'react';
import Searchbox from './Searchbox';
import Gallery from './Gallery';
import Head from './Head';
function App() {
  const[val,setval]=useState('')
  return (
    <div className="App">
      <Head/>
      <Searchbox val={val} setval={setval} />
      <Gallery query={val}/>
    </div>
  );
}

export default App;
