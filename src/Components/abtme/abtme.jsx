import React from 'react';
import './abtme.css';
import imageSrc from './resume.png'

const Abtme = () => {
    
  return (
   <div className="abox1"> 
<div className="abox11">
    <h1 className='big'>About Me</h1>
    <div className="abox111">About Me</div>
</div>
<div className="abox12">
    <div className="abox121">
        <div className="abox1211">
            <div className="abox133">
            Greetings! I'm Nayeem, your friendly web builder on a mission to create awesome online experiences. Picture smooth clicks, eye-catching design, and powerful tech quietly making it all happen.
                <div style={{ marginTop: '20px' }}></div>I'm like a conductor, developing the applications using MERN tools and deploying using Cloud Services (AWS, GCP, Azure – no problem!). I love tackling tricky problems, optimizing speed, and seeing happy users. Innovation is my thing, always pushing boundaries to build truly magical things. 
                <div style={{ marginTop: '20px' }}></div>So, if you're looking for a passionate partner to build the future one cloud-powered app at a time, you're in the right place! Let's explore my portfolio, dive into project stories, and chat about how my skills can bring your vision to life!
            </div>
        </div>
        <div className="abox1212">
        <div className="image-box-container">
      <div className="image-container">
        <img src={imageSrc} alt="Sample" className="image" />
        <a href="https://drive.google.com/file/d/1OPGrtCCcUI9vEmWEM9VUORFqfcaRJSLJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="image-link-button">
          View Resume
        </a>
      </div>
    </div>
        </div>
    </div>
</div><div className="abox13"></div>
   </div>
   
  );
}

export default Abtme;
