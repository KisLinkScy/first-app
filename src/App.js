import React from 'react';
import './App.css';
import Cont from './component/Cont/Cont';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Nav from './component/Navbar/Nav';

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
