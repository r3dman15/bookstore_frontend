import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './views/Landing';
import Login from './views/Login';
import Register from "./views/Register";
import Home from "./views/Home"
import './App.css';
import { useState } from 'react';



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/register" element={<Register  />} />
            <Route path="/home" element={<Home  />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;