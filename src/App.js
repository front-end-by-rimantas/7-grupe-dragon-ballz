import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './sections/header/Header';
import Hero from './sections/hero/Hero';
import ServicesList from './sections/service-list/ServicesList';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <ServicesList/>
      <Footer/>
    </div>
  );
}

export default App;
