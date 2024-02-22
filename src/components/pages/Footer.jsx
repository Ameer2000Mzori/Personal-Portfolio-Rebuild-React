import React from 'react'

const Footer = () => {
  return (
    <>
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
            href="https://www.linkedin.com/in/mohammed-ameen-82314425b/"
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

export default Footer
