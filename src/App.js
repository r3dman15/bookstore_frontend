import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

const Appp = () => {
  const [genre , setGrenre] = useState([])

  useEffect( () => {
    axios.get("http://localhost:8080/bookstore/genre")
        .then(res => setGrenre( res.data))
        .finally(r => console.log(r))
  }, [])

  return <div>{genre.map(g => g.name +" ")}</div>


}

function App() {
  return (
    <div className="App">
    <Appp/>
    </div>
  );
}

export default App;
