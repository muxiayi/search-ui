import React, { Component } from 'react';
import Searchtables from "./containers/Searchtables";
import Searchall from "./containers/Searchall";
import Login from "./containers/Login";
import './App.css';

class App extends Component  {
  render() {  
          return (
            <div>
                <Login />

                  <h1 style={{ marginBottom: '2vmax',marginTop: '2vmax', marginLeft: '-3vmax',}}> Welcome to Our Search System</h1>
                   
                  <div>
                    <Searchall></Searchall>
                  </div>

                  <div>     
                    <p style={{ marginBottom: '2vmax',marginTop: '4vmax',  }}> Not exactly know what you are looking for? Look here!</p>
                    <Searchtables></Searchtables>
                  </div>           
            </div>
          );
        }
      }

export default App;
