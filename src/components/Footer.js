import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                      {/* Footer*/}
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              Copyright © Your Website
              {/* This script automatically adds the current year to your website footer*/}
              {/* (credit: https://updateyourfooter.com/)*/}
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/profile.php?id=100046115102478"><i className="fab fa-facebook-f" /></a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
              <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
            </div>
        );
    }
}

export default Footer;