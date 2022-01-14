import React from 'react';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">{props.title}</a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarScroll">
                      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                      </ul>
                      <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      </form>
                      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode}
                         type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label classNaName="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark Mode":"Enable Light mode"} </label>
                      </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
