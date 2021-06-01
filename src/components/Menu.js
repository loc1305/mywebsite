import React, { Component } from 'react';


class Menu extends Component {
    render() {
        return (
            <div>
                  {/* Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="https://nhloc1305.tk"><img src="assets/img/about/LOC.png" alt="..." /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item"><a className="nav-link " href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/CV">CV</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="http://projecthci07.tk/"target="_blank">Project</a></li>
              <li className="nav-item"><a className="nav-link" href="/result">Result</a></li>
              <li className="nav-item"><a className="nav-link" href="/Lab">Lab</a></li>
            </ul>
        </div>
            </div>
        </nav>
            </div> 
        );
    }
}

export default Menu;