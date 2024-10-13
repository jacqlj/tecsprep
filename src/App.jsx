import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CampaignListView from './structural_comps/CampaignListView';
import CampaignView from './structural_comps/CampaignView';
import CourseView from './structural_comps/CourseView';
import Navbar from './Navbar';
import ProfileView from './structural_comps/ProfileView';
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
          <Route path="/campaign" element={<CampaignView />}></Route>
          <Route path="/campaignlist" element={<CampaignListView />}></Route>
          <Route path="/course" element={<CourseView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
