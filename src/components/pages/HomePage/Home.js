import React from 'react';
import './Home.css';
import { IconContext } from 'react-icons/lib';
import {
  faLinkedin,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<style>
@import url('https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap');
</style>

function Home() {
  return <div>

    


    <div class="content">
        <p>A NEW TWIST THAT KEEPS YOU RELEVANT!</p>
        
    </div>


    <div className='social-cont'>
    <ul className='social-cont-list'>
    <li>
                <a
                  href='https://www.linkedin.com/'
                  
                 
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
              </li> 
              <li>
                <a
                  href='https://www.facebook.com/'
                  
                 
                >
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
              </li> 
              {/* <li>
                <a
                  href='https://www.Instagram.com/'
                  
                 
                >
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
              </li>  */}
  </ul>
    </div>
  </div>;
}

export default Home;
