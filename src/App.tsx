import React, {Component} from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import CourseList from './components/CourseList';
import Album from './components/Album'
import './App.css';




function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <CourseList /> */}
      <Album />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Button variant="contained" color="primary">
    //     Hello World
    //     </Button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
