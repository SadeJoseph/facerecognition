import React, {Component} from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/Logo/Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Navigation/>
        <Logo />
         {/*
          <imageLinkForm/>
          <FaceRecognition/>*/}



      </div>
      
    );
  }
}

export default App;
