// import './App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { useState } from 'react';
// imp useState



function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.heading}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link a className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link a className="nav-link active" to="/about">{props.about}</Link>
        </li>
      </ul>
      <div class="form-check form-switch">
      <div class={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleslide}/>
  <label class={`form-check-label `} for="flexSwitchCheckDefault">Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
</div>

</div>
    </div>
  </div>
</nav>
  );
}
Navbar.propTypes = {
  heading: PropTypes.string,
  about:PropTypes.string,
}

export default Navbar;
