import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Nguyen Huu Loc</div>
          <h3 className="section-subheading text-muted">Hello, I'm a Student a Nong Lam University</h3>
          <br />
          <a className="btn btn-primary btn-xl text-uppercase" href="/CV">About me</a>
        </div>
      </header>
            </div>
        );
    }
}

export default Home;