import React from 'react';
import './App.css';
import Cont from './component/Cont';
import Footer from './component/Footer';
import Header from './component/Header';
import Nav from './component/Nav';

function App() {
  return (
    <div className="wraper">
      <Header />
      <Nav />
      <Cont />
      <Footer />
    </div>
  );
}

export default App;
