import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">{"< jrDevsBlog />"}</h4>
    <p className="text-center">
      Follow us on social media! have feed back? Send us an Email!
    </p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        {/* <li>
          <a
            href="https://facebook.com/jr"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
        </li> */}
        {/* <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </li> */}
        <li>
          <a
            href="https://instagram.com/jrdevsblog"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        {/* <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li> */}
        <li>
          <a
            href="mailto:jrdevsblog@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
