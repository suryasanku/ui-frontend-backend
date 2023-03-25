import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import GetOriginalUrl from './component/GetOriginalUrl';
import UrlComp from './component/UrlComp'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
     
          <Route path="/getoriginalurl" element={<GetOriginalUrl/>} />
          <Route path="/urlcomp" element={<UrlComp />} />
         
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;