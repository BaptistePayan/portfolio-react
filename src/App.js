/*import React, {useState, useEffect} from "react";

export default function App() {
const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUsers(json);
  }

  useEffect(() => {
   getUsers();
  },[])

    return (
        <div className="App">
          <header>
            <h1></h1>
            </header>
            <ul>
              {users.map(user => (
                <li>{user.login}</li>
              ))}
            </ul>
        </div>
    )
} */


    /*pour la modale j'ai voulu utilisé le useEffect mais force est de constaté qu'il y'a quelque chose qui ne va pas et je ne trouve pas la solution
je vous laisse mon travail ici afin que vous puissiez m'expliquer à la correction */
    
  
    
import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import MentionsLegales from "./pages/MentionsLegales";
import Contact from "./pages/Contact";





const App = () => {
  return(
<div className="app">
  <header className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#JohnDoe">JOHN DOE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1"> <Link to="Home" className="nav-link active py-3 px-0 px-lg-3 rounded">Acceuil</Link> </li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="Services"className="nav-link active py-3 px-0 px-lg-3 rounded" >Services</Link></li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="Portfolio" className="nav-link active py-3 px-0 px-lg-3 rounded">Portfolio</Link></li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="Contact" className="nav-link active py-3 px-0 px-lg-3 rounded">Contact</Link></li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="MentionsLegales" className="nav-link active py-3 px-0 px-lg-3 rounded">Mentions Légales</Link></li>
              </ul>
        </div>
      </div>
    </nav>
  </header>

    <Routes>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Services" element={<Services/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/MentionsLegales" element={<MentionsLegales/>}></Route>
    </Routes>
</div>      
)
}
export default App;

  
  
 


 

