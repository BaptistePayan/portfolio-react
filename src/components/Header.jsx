const Nav = () => {
    return(
        <div className="app">
        <header className="container">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#JohnDoe">John doe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"> <a className="nav-link active py-3 px-0 px-lg-3 rounded" >Home</a> <Link to="Home"></Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"> <a className="nav-link active py-3 px-0 px-lg-3 rounded" href="#Services">Services</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"> <a className="nav-link active py-3 px-0 px-lg-3 rounded" href="#Portfolio">Portfolio</a>
                          </li>
                          <li className="nav-item mx-0 mx-lg-1"> <a className="nav-link active py-3 px-0 px-lg-3 rounded" href="#Contact">Contact</a>
                          </li>
                          <li className="nav-item mx-0 mx-lg-1"> <a className="nav-link active py-3 px-0 px-lg-3 rounded" href="#MentionsLegales">Mentions légales</a>
                          </li>
                          </ul>
                    </div>
                  </div>
                </nav>
          </header>
            </div>
    )
    }
    
    export default Nav;

