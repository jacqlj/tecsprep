import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import ProfileView from './structural_comps/ProfileView';
import RouteView from './structural_comps/RouteView';
import TopicSelector from './structural_comps/TopicSelector';
import { useState } from 'react';

function App() {
  return (
    <>
      <header style={{ marginBottom: '2em' }}>
        <Navbar />
      </header>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index element={<TopicSelector />}></Route>
          <Route path="/profile" element={<ProfileView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
