import React, { Component } from 'react';

class CV extends Component {
    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
        <title>Loc's CV</title>
        {/* Load font awesome */}
        <link rel="stylesheet" href="mywebsite\public\css\styles2.css" />
        {/* Load google font */}
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet" />
        {/* Load main stylesheet */}
        <link rel="stylesheet" href="mywebsite\public\css\styles2.css" />
        <div className="wrapper flex">
        <body className="body"></body>
          <div className="sidebar">
            <div className="avatar">
              <img src="assets/img/about/loc.jpg" alt="..." width={350} height={550} alt="Nguyen Huu Loc" />
              <h1 className="name">Nguyen Huu Loc</h1>
              <h4 className="job">Studient at NLU</h4>
            </div>{/* .avatar */}
            <div className="module">
              <h3 className="module__title">
                <i className="fa fa-user circle circle--medium" />
                <span>About Me</span>
              </h3>
              <div className="module__content">
                <p>Date of birth: 13/05/2001 &amp; Age:20</p>
                <p>I'm a 2nd year student at the University of Agriculture and Forestry in Ho Chi Minh City.</p>
                <p>I'm working with my team to complete the webside project of Human Computer Interacion.</p>
              </div>
            </div>{/* End .module #1 */}
            <div className="module">
              <h3 className="module__title">
                <span>Contact Me</span>
              </h3>
              <div className="module__content">
                <ul>
                  <li className="flex">
                    <i className="fa fa-map-marker circle circle--small circle--white" />
                    <div>Bien Hoa-Dong Nai &amp; 466/2 Kp3 Phuong Quang Vinh</div>
                  </li>
                  <li className="flex">
                    <i className="fa fa-globe circle circle--small circle--white" />
                    <div>nhloc1305.tk<br />19130124@st.hcmuaf.edu.vn</div>
                  </li>
                  <li className="flex">
                    <i className="fa fa-mobile circle circle--small circle--white" />
                    <div>0941553409</div>
                  </li>
                </ul>
              </div>
            </div>{/* End .module #2 */}
            <div className="module module--progress">
              <h3 className="module__title">
                <i className="fa fa-graduation-cap circle circle--medium" />
                <span>My Skills</span>
              </h3>
              <div className="module__content">
                <ul>
                  <li className="flex">
                    <i className="fa fa-paint-brush circle circle--small circle--white" />
                    <div className="flex--1">
                      <span>Adobe Photoshop</span>
                      <span className="progress-bar"><span style={{width: '90%'}} /></span>
                    </div>
                  </li>
                  <li className="flex">
                    <i className="fa fa-globe circle circle--small circle--white" />
                    <div className="flex--1">
                      <span>Web Design &amp; HTML-CSS</span>
                      <span className="progress-bar"><span style={{width: '85%'}} /></span>
                    </div>
                  </li>
                  <li className="flex">
                    <i className="fa fa-print circle circle--small circle--white" />
                    <div className="flex--1">
                      <span>Print Design</span>
                      <span className="progress-bar"><span style={{width: '70%'}} /></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{/* End .module #3 */}
          </div>{/* End .sidebar */}
          <div className="content">
            <div className="section">
              <h2 className="section__title">
                <i className="fa fa-briefcase circle circle--large" />
                <span>Work Experience</span>
              </h2>
              <div className="section__content">
                <div className="module">
                  <h3 className="module__title">Creative Designer</h3>
                  <div className="module__meta">
                  </div>
                  <div className="module__content">
                    <p></p>
                  </div>
                </div>{/* End .module #4 */}
                <div className="module">
                  <h3 className="module__title">Android Developer</h3>
                  <div className="module__meta">
                  </div>
                  <div className="module__content">
                    <p></p>
                  </div>
                </div>{/* End .module #5 */}
                <div className="module">
                  <h3 className="module__title">Senior Artist &amp; Director</h3>
                  <div className="module__meta">
                  </div>
                  <div className="module__content">
                    <p></p>
                  </div>
                </div>{/* End .module #6 */}
              </div>{/* End .section__content */}
            </div>{/* End .section #1 */}
            <div className="section">
              <h2 className="section__title">
                <i className="fa fa-briefcase circle circle--large" />
                <span>Work Experience</span>
              </h2>
              <div className="section__content">
                <div className="module">
                  <h3 className="module__title">Creative Designer</h3>
                  <div className="module__meta">
                  </div>
                  <div className="module__content">
                    <p></p>
                  </div>
                </div>{/* End .module #7 */}
                <div className="module">
                  <h3 className="module__title">Android Developer</h3>
                  <div className="module__meta">
                  </div>
                  <div className="module__content">
                    <p></p>
                  </div>
                </div>{/* End .module #8 */}
              </div>{/* End .section__content */}
            </div>{/* End .section #2 */}
            <div className="section">
              <h2 className="section__title">
                <i className="fa fa-briefcase circle circle--large" />
                <span>Work Experience</span>
              </h2>
              <div className="section__content">
                <div className="lang flex">
                  <div className="lang__content">
                    <img src="assets/img/about/anh.jpg" width={133} height={89} alt="English" />
                    <h4>English</h4>
                    <div className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <div className="lang__content">
                    <img src="assets/img/about/han.png" width={133} height={89} alt="Korea" />
                    <h4>Korea</h4>
                    <div className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <div className="lang__content">
                    <img src="assets/img/about/nhat.png" width={133} height={89} alt="Japan" />
                    <h4>Japan</h4>
                    <div className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>{/* End .section__content */}
            </div>{/* End .section #3 */}
          </div>{/* End .content */}
        </div>{/* End .wrapper */}
            </div>
        );
    }
}

export default CV;