import React from 'react';
import './App.css';
import Cont from './component/Cont/Cont';
import Dialog from './component/Navbar/Ssilki/Dialog/Dialog';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Nav from './component/Navbar/Nav';
import News from './component/Navbar/Ssilki/News/News';
import Music from './component/Navbar/Ssilki/Music/Music';
import Pichers from './component/Navbar/Ssilki/Pichers/Pichers';
import Setting from './component/Navbar/Ssilki/Settingss/Setting';
import { Route, Routes } from 'react-router-dom';


const App = (props) => {

  return (
    <div className="wraper">
      <Header />
      <Nav />
      <div className='wraper-cont'>
        <Routes>
          <Route path='/cont' element={<Cont postDate={props.state.contPage.postDate}/>} />
          <Route path='/dialog/*' element={<Dialog dialogData={props.state.dialogPage.dialogData} messageData={props.state.dialogPage.messageData}/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/pichers' element={<Pichers />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
