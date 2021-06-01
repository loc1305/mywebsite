import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                      {/* Contact*/}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted"></h3>
          </div>
          <form id="contactForm">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" defaultValue={""} />
                  <p className="help-block text-danger" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div id="success" />
              <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>

            </div>
        );
    }
}

export default Contact;