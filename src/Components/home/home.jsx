
import './home.css';
import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ words, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;

    const intervalId = setInterval(() => {
      const currentWord = words[currentWordIndex];

      setDisplayedText(currentWord.substring(0, currentCharIndex));

      currentCharIndex++;

      if (currentCharIndex > currentWord.length) {
        currentWordIndex++;
        currentCharIndex = 0;
      }

      if (currentWordIndex >= words.length) {
        clearInterval(intervalId);
        setCompleted(true);

        // Delay before resetting the animation
        setTimeout(() => {
          setCompleted(false);
          currentWordIndex = 0;
          currentCharIndex = 0;
        }, 1000); // Adjust the delay as needed
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [words, delay, completed]);

  return (
    <div className="typing-container">
      <div className="typing-text">
        {displayedText}
      </div>
    </div>
  );
};

const Home = () => {
  
  const words = ['Student', 'Engineer', 'Web Devloper'];
  return (
    <div className="hbox1" id="hbox1">
       <div className="hbox12111">ㅤ</div>
        <div className="hbox11">
            <div className="hbox111">
            <div className="hbox1111">
             <div className="hbox9"> HELLO ! </div>
             <div className="hbox999"><b className='bqb'> I'm  </b><b className='bbb'>Abdul Nayeem</b></div>
             <div className="hbox99"> <TypingAnimation words={words} delay={300} /></div>
             <div className="hbox8">An undergraduate </div>
             <div className="hbox98">
             <div className="social-buttons-container">
      <a href="https://www.linkedin.com/in/shaikabdulnayeem/" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
        Linked In
      </a>
      <a href="https://github.com/Nayeem-stud" target="_blank" rel="noopener noreferrer" className="social-button github">
        GitHub
      </a> 
    </div>
             </div>
            </div>
            </div>
            <div className="hbox112">ㅤ</div>
        </div>
        <div className="hbox12">ㅤ</div>
        <div className="hbox111112">ㅤ</div>
    </div>
  );
}

export default Home;
