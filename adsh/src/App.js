import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <header />
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Hi There</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const Landing = () => {
    return(
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Hi There</h1>
            </div>

        </div>

    );
}
const Dashboard = () => <h2>Dashboard</h2>;

const App = () => {
    return(
        <div>
           <BrowserRouter>
               <div>
                   <Header />
                   <Route exact = {true} path="/" component = {Landing} />
                   <Route path="/dashboard" component = {Dashboard} />
               </div>
           </BrowserRouter>
        </div>

    );
}

export default App;
