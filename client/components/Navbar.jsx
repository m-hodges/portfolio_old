import React from 'react'
import { Container } from 'semantic-ui-react'

// import '../../server/public/styles/nav.css'

const Navbar = () => {
  return (
    <Container className="nav">
      <div className="icon">
        <a href="#">
          <i className="fas fa-home">
            <i className="fas fa-home"></i>
          </i>
        </a>
        <a href="#">
          <p data-text="Home">Home
            <hr/>
          </p>
        </a>
      </div>
      <div className="icon">
        <a href="#">
          <i className="fas fa-code">
            <i className="fas fa-code"></i>
          </i>
        </a>
        <a href="#">
          <p data-text="Projects">Projects
            <hr/>
          </p>
        </a>
      </div>
      <div className="icon">
        <a href="#">
          <i className="fas fa-id-badge">
            <i className="fas fa-id-badge"></i>
          </i>
        </a>
        <a href="#">
          <p data-text="About">About
            <hr/>
          </p>
        </a>
      </div>
      <div className="icon">
        <a href="mailto:michaelcshodges@gmail.com">
          <i className="fas fa-envelope">
            <i className="fas fa-envelope"></i>
          </i>
        </a>
        <a href="mailto:michaelcshodges@gmail.com">
          <p data-text="Contact">Contact
            <hr/>
          </p>
        </a>
      </div>
    </Container>
  )
}

export default Navbar
