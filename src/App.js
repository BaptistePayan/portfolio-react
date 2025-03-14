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

import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Header";

const App = () => {
  return (
  <div>
<Home />
  </div>
  )
}


export default App
 

