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
            <h1>oui</h1>
            </header>
            <ul>
              {users.map(user => (
                <li>{user.login}</li>
              ))}
            </ul>
        </div>
    )
} */
    import { Route, Routes, Link } from "react-router-dom";
  
    
    
    
    import Services from "./pages/Services";
    import Contact from "./pages/Contact";
    import MentionsLegales from "./pages/MentionsLegales";



    import React from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
  <div>
<Home />
<Portfolio />
  </div>
  )
}


export default App


 

