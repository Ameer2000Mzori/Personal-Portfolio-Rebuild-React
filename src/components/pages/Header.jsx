import React from 'react'

const Header = () => {
  return (
    <>
      {/* <!-- header --> */}
      <header id="HOME" className="header">
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
              <h3>2</h3>
              <h4>YEARS OF EXPERINCE</h4>
            </div>
            <div className="text-Cont-2">
              <h3>110+</h3>
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
    </>
  )
}

export default Header
