import React from 'react';
import './proj.css';
import imgeve from './event.jpg';
import Youtube from './Youtubee.jpg';
import Portfo from './portfolio.jpg';
import ecomm from './ecommerce.png';
import todo from './todo.png';
import eve from './eve.jpg';

const Proj = () => {
  return (
   <div className="pbox1"> 
   <div className="pbox0">
    <div className="pbox11">
    <div className="pback">ProJects</div>
    </div>
    <div className="pbox22">
      <div className="pbox222">
        <div className="pbox0i">
          <div className="pimg">
          <a href="https://nayeemevent.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={imgeve} alt="Sample" className="imgeve" /></a>
          </div>
          <div className="pronam">Event Management</div>
          <div className="prodis"> Implementing College Event Management Interface For My VVIT college. this Preoject is Frontend Project, which is developed by Html, Css and Javascript Languauges. Many College Event Mangaging Features are Available in this Project Like scrolling Latest Event Slides, Live registrations, Imformation About event Etc.,,</div>
          <div className="proj6git">
                        <a href="https://github.com/Nayeem-stud/college-event" target="_blank" rel="noopener noreferrer">
                        <button className="projbut">View in Github</button></a>
                        
                        </div>
        </div>
        <div className="pbox0o">
        <div className="pimg">
        <a href="https://todolist-1-htrh.onrender.com/" target="_blank" rel="noopener noreferrer">
          <img src={todo} alt="Sample" className="imgevee" /></a>
          </div>
          <div className="pronam">To-Do List</div>
          <div className="prodis">
          Managing tasks efficiently is crucial in today’s fast-paced world, and that’s exactly where our To-Do List application comes in. This simple yet powerful app helps you organize your daily tasks, keep track of deadlines, and ensure nothing falls through the cracks. Whether you’re juggling work, study, or personal projects, our app can help you stay on top of it all.</div>
<div className="proj6git">
                        <a href="https://github.com/Nayeem-stud/Youtube-Clone" target="_blank" rel="noopener noreferrer">
                        <button className="projbut">View in Github</button></a>
                        
                        </div>
        </div>
        <div className="pbox0p">
          <div className="pimg">
          <a href="https://github.com/Nayeem-stud/Inventry-managment-R" target="_blank" rel="noopener noreferrer">
          <img src={ecomm} alt="Sample" className="imgeve" /></a>
          </div>
          <div className="pronam">Event Management</div>
          <div className="prodis"> In R, manage e-commerce inventory with functions and packages designed for data handling and reporting. Use dplyr to create, update, and delete inventory items by manipulating data frames or databases. For generating detailed reports and visualizations, leverage ggplot2 and rmarkdown. These tools enable efficient and automated inventory management.</div>
          <div className="proj6git">
                        <a href="https://github.com/Nayeem-stud/Inventry-managment-R" target="_blank" rel="noopener noreferrer">
                        <button className="projbut">View in Github</button></a>
                        </div>
        </div>
      </div>
      <div className="pbox333">
    
        <div className="pbox0i">
        <div className="pimg">
        <a href="https://nayeemportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={Portfo} alt="Sample" className="imgeveee" />
          </a>
          </div>
          <div className="pronam">My Portfolio</div>
          <div className="prodis">Elevate My portfolio using React, JavaScript, HTML, and CSS. Employ React's component-based approach for a dynamic presentation Ensure responsiveness for a seamless user experience. Craft a unique and visually appealing showcase that highlights My skills and personality, leaving a lasting impression on potential employers or clients.</div>
          <div className="proj6git">
                        <a href="https://github.com/Nayeem-stud/My-Portfolio" target="_blank" rel="noopener noreferrer">
                        <button className="projbut">View in Github</button></a>
                        
                        </div>
        </div>
        
        <div className="pbox0o">
        <div className="pimg">
        <a href="https://nayeemyoutubeclone.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={eve} alt="Sample" className="imgevee" /></a>
          </div>
          <div className="pronam">College Event Managment (Group Project) </div>
          <div className="prodis">
          Managing events can be a daunting task, especially in a college environment where multiple events, deadlines, and participants need to be handled simultaneously. Our Event Management System (EMS), built using the MERN stack, simplifies the process of organizing, managing, and tracking campus events—making it the perfect tool for students, event organizers, and faculty.</div>
<div className="proj6git">
                        <a href="https://github.com/Nayeem-stud/Youtube-Clone" target="_blank" rel="noopener noreferrer">
                        <button className="projbut">View in Github</button></a>
                        
                        </div>
        </div>
        <div className="pbox0p">
        <div className="pimg">
        <a href="https://nayeemyoutubeclone.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={Youtube} alt="Sample" className="imgevee" /></a>
          </div>
          <div className="pronam">YouTube</div>
          <div className="prodis">
Creating a YouTube clone with HTML and CSS involves designing a user-friendly interface for video content. Use HTML for structuring the webpage and CSS for styling elements. Implement  responsive layout  for various device and a  Keep it as simple, engaging, and ensure smooth navigation for an authentic user experience.</div>
<div className="proj6git">
                        <a href="https://github.com/Nayeem-stud/Youtube-Clone" target="_blank" rel="noopener noreferrer">
                        <button className="projbut">View in Github</button></a>              
                        </div>
        </div>
        </div>
    </div>
   </div>
   </div>
  );
}
export default Proj;
