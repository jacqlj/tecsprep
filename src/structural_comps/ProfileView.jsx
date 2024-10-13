// Profile component for TecsPrep hackathon project
// Requirements: Displays User Name, Tecsperience Points, Profile Picture, Radar Chart, Badges, and Campaigns
// Dependencies: RadarChart, Badge, CampaignLists, ProfilePicture, TecsperiencePoints, and UserName components

import './ProfileView.css';

import React, { useEffect, useState } from 'react';

import CourseView from './CourseView';
// Import dependencies
import SkillChart from './Profile_SubComps/SkillChart';
import TecsperiencePoints from './Profile_SubComps/TecsperiencePoints';
import TopicSelector from './TopicSelector';
import { getUser } from '../dbUTIL';

//display radar chart and tecsperience points
function ProfileView() {
  // gets the users to have the JSON of the Users DB
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUser();
        setUsers(users);
        // Similarly for other functions...
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const user = users[0];

  // parses through the users json to get username:demo-user's information
  return (
    <div>
      <div className="profile-banner">
        <div className="profile-div">
          <img
            className="profile-picture"
            src="https://www.adobe.com/creativecloud/photography/discover/media_131179edca5f92db203e2b78cb8a308605afbc958.png?width=750&format=png&optimize=medium"
            alt="profile"
          />
        </div>
        <div className="name-container">
          <span className="name">{user ? user.disp_name : ''}</span>
          <span className="username">{`@${user ? user.username : ''}`}</span>
        </div>
      </div>
      <div className="statistics">
        <div className="overview">
          <span className="display-4">Overview</span>
          <div className="grid-row">
            <div className="grid-cell">
              <div className="title">TXP</div>
              <div className="value">
                {user ? user.tecsperience_pts : ''}&nbsp;
                <img src="src/assets/white-icon.svg" alt="tecsicon" className="staticon" />
              </div>
            </div>
            <div className="grid-cell">
              <div className="title">Routes completed</div>
              <div className="value">
                27&nbsp;
                <i className="bi bi-signpost-split"></i>
              </div>
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-cell">
              <div className="title">Badges</div>
              <div className="value">
                12&nbsp;
                <i className="bi bi-patch-check"></i>
              </div>
            </div>
            <div className="grid-cell">
              <div className="title">Streak</div>
              <div className="value">
                109&nbsp;
                <i className="bi bi-fire"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="radar">
          <SkillChart />
        </div>
      </div>
      <div className="friends"></div>
    </div>
  );
}

export default ProfileView;
