
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Newsitem from './components/Newsitem';

/*import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";*/
//import LoadingBar from 'react-top-loading-bar';




export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height="3px" color="#1BC5BD" progress={this.state.progress} onLoaderFinished={() => setProgress(0)} />
          <Routes>
            <Route excat path="/" element={<News key='Home' pageSize={10} country="in" category="Home" />}> </Route>
            <Route excat path="Business" element={<News key='Business' pageSize={10} country="in" category="Business" />}> </Route>
            <Route excat path="Entertainment" element={<News key='Entertainment' pageSize={10} country="in" category="Entertainment" />}> </Route>
            <Route excat path="General" element={<News key='General' pageSize={10} country="in" category="General" />}> </Route>
            <Route excat path="Health" element={<News key='Health' pageSize={10} country="in" category="Health" />}> </Route>
            <Route excat path="Science" element={<News key='Science' pageSize={10} country="in" category="Science" />}> </Route>
            <Route excat path="Sports" element={<News key='Sports' pageSize={10} country="in" category="Sports" />}> </Route>
            <Route excat path="Technology" element={<News key='Technology' pageSize={10} country="in" category="Technology" />}> </Route>
          </Routes>


        </Router>
        <News />
        <Newsitem />

      </div>
    )
  }
}


