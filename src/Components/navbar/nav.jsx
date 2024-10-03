import React from 'react';
import './nav.css';
import { Link } from 'react-scroll';
const Navbar = () => {
  
  return (
    <div className="sticky-top">
      <div className="nbox1">
        <div className="nbox11">
        <div className='nbo' href="#" rel="noopener noreferrer">
             Portfolio 
      </div>
        </div>
        <div className="nbox12">
       <div className="ll">
        <ul className="nav-list">
          <li>  <Link
    to="hbox1"
    smooth={true}
    duration={500}
    activeClass="active"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    Home
  </Link></li>
          <li><Link to="hbox12" smooth={true} duration={500} activeClass="active">About Me</Link></li>
          <li><Link to="abox13" smooth={true} duration={500} activeClass="active">Qualification</Link></li>
          <li><Link to="extrbox" smooth={true} duration={500} activeClass="active">Experience</Link></li>
          <li><Link to="sbox1" smooth={true} duration={500} activeClass="active">Skills</Link></li>
          <li><Link to="skilextra" smooth={true} duration={500} activeClass="active">Projects</Link></li>
          <li><Link to="cbox1" smooth={true} duration={500} activeClass="active">Certifications</Link></li>
          <li><Link to="gbox1" smooth={true} duration={500} activeClass="active">Contact</Link></li>
        </ul>
      </div> </div>
      </div></div>

  );
}

export default Navbar;
