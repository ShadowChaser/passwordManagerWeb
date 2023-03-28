import React,{useState} from 'react';
import {FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa"
import profilepic from '../profilepic.jpg';
import "./navbar.css";
import {GiHamburgerMenu} from "react-icons/gi";


export default function Navbar() {
    const [showMediaIcons,setShowMediaIcons]=useState(false);
  return (
      <>
        <nav className='main-nav'>
          <div className='logo'>
              <h2>
                <span>P</span>assword
                <span>M</span>anager
              </h2>
          </div>
          <div className={showMediaIcons?"menu-link mobile-menu-link":"menu-link"}>
              <ul>
                  <li>
                      <a href="#">Home</a>
                  </li>
                  <li>
                      <a href="#">About</a>
                  </li>
                  <li>
                      <a href="#">Services</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
              </ul>
          </div>
            {/* {3rd social media links} */}
            <div className='social-media'>
                  <ul className='social-media-desktop'> 
                      <li>
                          <a
                          href="https://www.youtube.com" target="_abhishek"
                          ><FaYoutube className='youtube'/></a>
                      </li>
                      <li>
                          <a
                          href="https://www.youtube.com" target="_abhishek"
                          ><FaInstagram className='instagram'/></a>
                      </li>
                      <li>
                          <a
                          href="https://www.youtube.com" target="_abhishek"
                          ><FaFacebook className='facebook'/></a>
                      </li>
                  </ul>
                  <div className="hamburger-menu">
                      <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                      </a>
                    </div>
            </div>
            <div>
                
            </div>
        </nav>
        
      </>
  )
}


