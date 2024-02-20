import react from 'react'
import Navbar from './components/NavBar.jsx'
import Header from './components/pages/Header.jsx'
import Skills from './components/pages/Skills.jsx'
import Projects from './components/pages/Projects.jsx'
import Footer from './components/pages/Footer.jsx'
function App() {
  return (
    <>
      {/* <!-- animation button --> */}
      <div className="open-Close-Btn">
        <span className="bar-One"></span>
        <span className="bar-Two"></span>
      </div>

      {/* <!-- navbar --> */}
      <nav className="navbar active">
        <div className="decoration-Bar">
          <div className="cercle-One"></div>
          <div className="line-El"></div>
          <div className="cercle-Two"></div>
        </div>
        <div className="nav-Links">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">GALLERY</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CLIENTS</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- header --> */}
      <header className="header">
        <div className="header-Top-Wrap">
          <div className="logo">
            <span className="logo-T-One">Web</span>
            <span className="logo-T-Two">Dev</span>
          </div>
        </div>
        <div className="header-Top-Mid">
          <div className="left-banner">
            <div className="cercle-One"></div>
            <div className="line-El"></div>
            <div className="cercle-Two"></div>
          </div>
          <div className="mid-banner">
            <div className="information-Wrap">
              <div className="title-Text">
                <h3 className="title-Span-One">HELLO,</h3>
                <h3 className="title-Span-Two">MY NAME IS</h3>
              </div>
              <div className="title-Name">
                <h1 className="first-Name">Ameer</h1>
                <h1 className="Second-Name">Ameen</h1>
              </div>
              <h3 className="text-Two">I AM Web Developer</h3>
              <p className="text-Par">
                🌟 Ameer | 23 | Netherlands | Full Stack Developer | Exploring
                Opportunities in React, Node.js, MongoDB | Open to New Ventures
                🚀
              </p>
              <div className="social-Buttons">
                <a
                  href="https://github.com/Ameer2000Mzori"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ameer-ameen-82314425b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="cv-Btn-Down">
                <button className="down-Btn">DOWNLOAD CV</button>
                <div className="line-Decoration"></div>
                <h4 className="text-Btn-Last">MY SKILLS</h4>
              </div>
            </div>
          </div>
          <div className="right-Banner">
            <div className="img-Text-Circle"></div>
            <div className="text-Cont-1">
              <h3>0.5</h3>
              <h4>YEARS OF EXPERINCE</h4>
            </div>
            <div className="text-Cont-2">
              <h3>80+</h3>
              <h4>COMPELETED PROJECTS</h4>
            </div>
          </div>
        </div>
        <div className="header-Top-Bottom">
          <h1 className="bottom-Text">
            <i>Web Developer</i>
          </h1>
        </div>
      </header>

      {/* <!--  Skills section --> */}
      <section className="skills">
        <div className="left-Deco-Skills">
          <div className="skills-Cercle-One"></div>
          <div className="skills-Line-El"></div>
          <div className="skills-Cercle-Two"></div>
        </div>
        <div className="right-Skill-Skills">
          <div className="titles-Skills">
            <h1 className="skills-Text-One">PROFESSIONAL SKILLS</h1>
            <div className="skills-Text-Two">
              <h3 className="text-Skills-2-1">MY</h3>
              <h3 className="text-Skills-2-2">Skills</h3>
            </div>
          </div>
          <div className="skills-Cards-Wrap">
            <div className="skills-Card">
              <div className="name-Lang-Num">
                <h2 className="skills-Name">HTML</h2>
                <h2 className="skills-Num">95%</h2>
              </div>
              <p className="skills-P">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere, nobis nisi, blanditiis laborum, cum
                eveniet id quas consequatur modi in pariatur error est hic
                voluptates quos beatae amet tempora?
              </p>
              <div className="skills-Range-Wrap">
                <div className="skills-Range">
                  <div className="skills-Range-Fill">
                    <div className="skills-Range-Circile"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-Card">
              <div className="name-Lang-Num">
                <h2 className="skills-Name">CSS</h2>
                <h2 className="skills-Num">85%</h2>
              </div>
              <p className="skills-P">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere, nobis nisi, blanditiis laborum, cum
                eveniet id quas consequatur modi in pariatur error est hic
                voluptates quos beatae amet tempora?
              </p>
              <div className="skills-Range-Wrap">
                <div className="skills-Range">
                  <div className="skills-Range-Fill Css">
                    <div className="skills-Range-Circile Css"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-Card">
              <div className="name-Lang-Num">
                <h2 className="skills-Name">SCSS</h2>
                <h2 className="skills-Num">60%</h2>
              </div>
              <p className="skills-P">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere, nobis nisi, blanditiis laborum, cum
                eveniet id quas consequatur modi in pariatur error est hic
                voluptates quos beatae amet tempora?
              </p>
              <div className="skills-Range-Wrap">
                <div className="skills-Range">
                  <div className="skills-Range-Fill Scss">
                    <div className="skills-Range-Circile Scss"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-Card">
              <div className="name-Lang-Num">
                <h2 className="skills-Name">JAVASCRIPT</h2>
                <h2 className="skills-Num">55%</h2>
              </div>
              <p className="skills-P">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere, nobis nisi, blanditiis laborum, cum
                eveniet id quas consequatur modi in pariatur error est hic
                voluptates quos beatae amet tempora?
              </p>
              <div className="skills-Range-Wrap">
                <div className="skills-Range">
                  <div className="skills-Range-Fill JavaScript">
                    <div className="skills-Range-Circile JavaScript"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-Card">
              <div className="name-Lang-Num">
                <h2 className="skills-Name">TYPESCRIPT</h2>
                <h2 className="skills-Num">35%</h2>
              </div>
              <p className="skills-P">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere, nobis nisi, blanditiis laborum, cum
                eveniet id quas consequatur modi in pariatur error est hic
                voluptates quos beatae amet tempora?
              </p>
              <div className="skills-Range-Wrap">
                <div className="skills-Range">
                  <div className="skills-Range-Fill TypeScript">
                    <div className="skills-Range-Circile TypeScript"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-Card">
              <div className="name-Lang-Num">
                <h2 className="skills-Name">TOOLS</h2>
                <h2 className="skills-Num">50%</h2>
              </div>
              <p className="skills-P">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere, nobis nisi, blanditiis laborum, cum
                eveniet id quas consequatur modi in pariatur error est hic
                voluptates quos beatae amet tempora?
              </p>
              <div className="skills-Range-Wrap">
                <div className="skills-Range">
                  <div className="skills-Range-Fill Tools">
                    <div className="skills-Range-Circile Tools"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- projects --> */}
      <section className="projects">
        <div className="left-Projects-Wrap">
          <div className="projects-Titles">
            <h1 className="projects-Text-1">PORTFOLIO</h1>
            <div className="projects-Text-2">
              <h1 className="P-T-1-2">MY</h1>
              <h1 className="P-T-2-2">Projects</h1>
            </div>
          </div>
          <div className="Projects-Wrap"></div>
          <div className="view-More-Btn-Wrap">
            <button className="view-More-Btn">VIEW MORE</button>
          </div>
        </div>
        <div className="right-Projects-Wrap">
          <div className="Projects-Decoration-Bar">
            <div className="Projects-Cercle-One"></div>
            <div className="Projects-Line-El"></div>
            <div className="Projects-Cercle-Two"></div>
          </div>
        </div>
      </section>

      {/* <!-- Contact --> */}
      <section className="contact">
        <div className="contact-Top">
          <h1 className="contact-Title-1">CONTACT</h1>
          <div className="contact-title-2">
            <h1 className="contact-Title-2-1">LET'S</h1>
            <h1 className="contact-Title-2-2">Have Some Talk</h1>
          </div>
        </div>
        <div className="contact-Bottom">
          <div className="contact-Left-Side">
            <div className="contact-Decoration-Bar">
              <div className="contact-Cercle-One"></div>
              <div className="contact-Line-El"></div>
              <div className="contact-Cercle-Two"></div>
            </div>
          </div>
          <div className="contact-Mid-Side">
            <div className="contact-Card">
              <i id="contact-Mid-Icon" className="fa-solid fa-location-dot"></i>
              <div className="contact-Mid-Line"></div>
              <div className="contact-Mid-Info">
                <h3 className="contact-Info-Text-H3">Address</h3>
                <p className="contact-Info-Text-P">Amsterdam, NL</p>
              </div>
            </div>
            <div className="contact-Card">
              <i id="contact-Mid-Icon" className="fa-regular fa-user"></i>
              <div className="contact-Mid-Line"></div>
              <div className="contact-Mid-Info">
                <h3 className="contact-Info-Text-H3">Freelance</h3>
                <p className="contact-Info-Text-P">Available Right Now</p>
              </div>
            </div>
            <div className="contact-Card">
              <i id="contact-Mid-Icon" className="fa-regular fa-envelope"></i>
              <div className="contact-Mid-Line"></div>
              <div className="contact-Mid-Info">
                <h3 className="contact-Info-Text-H3">Email</h3>
                <p className="contact-Info-Text-P">ameerapex496@gmail.com</p>
              </div>
            </div>
            <div className="contact-Card">
              <i id="contact-Mid-Icon" className="fa-brands fa-github"></i>
              <div className="contact-Mid-Line"></div>
              <div className="contact-Mid-Info">
                <h3 className="contact-Info-Text-H3">Github</h3>
                <p className="contact-Info-Text-P">ameer2000mzori</p>
              </div>
            </div>
          </div>
          <div className="contact-Right-Side">
            <div className="form">
              <div className="name-Email-Wrap">
                <div className="name-Wrap">
                  <div className="name-Text-Wrap">
                    <h1 className="label-Name" htmlFor="">
                      YOUR FULL NAME
                    </h1>
                    <span className="label-Must">*</span>
                  </div>
                  <input className="name-Input" type="text" />
                </div>
                <div className="email-Wrap">
                  <div className="email-Text-Wrap">
                    <h1 className="label-Email" htmlFor="">
                      YOUR EMAIL ADDRESS
                    </h1>
                    <span className="label-Must">*</span>
                  </div>
                  <input className="email-Input" type="text" />
                </div>
              </div>
              <div className="subject-Wrap">
                <div className="subject-Text-Wrap">
                  <h1 className="label-Subject" htmlFor="">
                    YOUR SUBJECT
                  </h1>
                  <span className="subject-Label-Must">*</span>
                </div>
                <input className="subject-Input" type="text" />
              </div>

              <div className="message-Wrap">
                <div className="message-Text-Wrap">
                  <h1 className="label-Message" htmlFor="">
                    YOUR MESSAGE
                  </h1>
                  <span className="message-Label-Must">*</span>
                </div>
                <textarea
                  name=""
                  className="message-Text-Area"
                  cols="80"
                  rows="30"
                ></textarea>
              </div>
              <div className="send-Button-Wrap">
                <button className="sent-Button">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="footer-Left-Wrap">
          <a
            href="https://github.com/Ameer2000Mzori"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="footer-Icon" className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ameer-ameen-82314425b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="footer-Icon" className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-Mid-Wrap">
          <h1 className="text-Rights-1-1">@ WEB</h1>
          <h1 className="text-Rights-1-2">Dev, All Rights Reserved. 2023</h1>
        </div>
        <div className="footer-Right-Wrap">
          <h1 className="footer-Made-Text-1">Made By</h1>
          <h1 className="footer-Made-Text-2">Ameer Ameen</h1>
        </div>
      </footer>
    </>
  )
}

export default App
