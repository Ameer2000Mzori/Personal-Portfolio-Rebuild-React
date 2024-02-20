import react from 'react'
import Navbar from './components/NavBar.jsx'
import Header from './components/pages/Header.jsx'
import Skills from './components/pages/Skills.jsx'
import Projects from './components/pages/Projects.jsx'
import Footer from './components/pages/Footer.jsx'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
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
