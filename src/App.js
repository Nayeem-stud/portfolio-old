import React from 'react';
import './App.css';
import Navbar from './Components/navbar/nav';
import Home from './Components/home/home';
import Abtme from './Components/abtme/abtme';
import Edu from './Components/edu/edu';
import Exp from './Components/exp/exp';
import Proj from './Components/proj/proj';
import Skill from './Components/skil/skil';
import Git from './Components/git/git';
import Certify from './Components/certify/certify';


function App() {

  return (
    <div className="App">
      <header className="App-header">
            <Navbar />
            <Home />   
            <Abtme /> 
            <Edu />
            <Exp />
            <Skill />
            <Proj />
            <Certify />
            <Git />
      </header>
    </div>
  );
}

export default App;
