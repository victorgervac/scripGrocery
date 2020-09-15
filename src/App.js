import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from  "./List";

class App extends React.Component {
  state = {
      groceries: [
        {id: 1, name: "Bannanas", complete:true,},
        {id: 2, name: "Apples", complete:false,},
        {id: 3, name: "Eggs", complete:true,},
      ],
  };
  
  render() {
    return(
      <>
      <List />
      </>
    );
  }
}

export default App;
