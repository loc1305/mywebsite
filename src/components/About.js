import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                 {/* About*/}
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Education</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img src="assets/img/about/LQD.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>HighSchool</h4>
                  <h4 className="subheading">2015-2018</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Le Quy Don School was established on April 1, 1998 until now. The school has been recognized as meeting national standards with modern facilities; enthusiastic teaching staff. For many years, Le Quy Don High School has always maintained the quality of teaching and learning with the annual rate of students passing high school graduation reaching 100%, the rate of students passing universities and colleges reaching from 80 to 85%.</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/logo.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>University</h4>
                  <h4 className="subheading">2019-Present</h4>
                </div>
            <div className="timeline-body"><p className="text-muted">NLU in Ho Chi Minh City is a long-standing multidisciplinary university in Vietnam, specializing in training and researching groups in agriculture - forestry - fishery. The school belongs to the Ministry of Education and Training. The school was established on the basis of Bao Loc National School of Agriculture and Forestry, which was established in 1955.</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of My
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
            
            </div>
        );
    }
}

export default About;