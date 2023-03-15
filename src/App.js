import './App.css';
import Nav from './components/nav/Nav';
import React from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';



axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '0042526a3901f5070c408711a76b9c97',
};

const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
