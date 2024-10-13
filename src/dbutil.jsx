const API_URL = 'https://tecsprep.jxl6891.workers.dev/api'; // Base URL for your API

// RETURNS JSON Data of ALL USERS
export const getUser = async () => {
  try {
    const response = await fetch(`${API_URL}/user`);
    if (!response.ok) throw new Error('Error fetching users');
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

// RETURNS JSON Data of ALL CAMPAIGNS
export const getCampaigns = async () => {
  try {
    const response = await fetch(`${API_URL}/campaigns`);
    if (!response.ok) throw new Error('Error fetching campaigns');
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching campaigns: ${error.message}`);
  }
};

// RETURNS JSON Data of ALL ROUTES
export const getRoutes = async () => {
  try {
    const response = await fetch(`${API_URL}/routes`);
    if (!response.ok) throw new Error('Error fetching routes');
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching routes: ${error.message}`);
  }
};

//RETURNS ALL Courses
export const getCoursePool = async () => {
  try {
    const response = await fetch(`${API_URL}/course_pool`);
    if (!response.ok) throw new Error('Error fetching course pool');
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching course pool: ${error.message}`);
  }
};

// creates a user JSON
export const createUser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error creating user');
    return await response.text(); // You can adjust this based on your API response
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

// Creates a NEW Campaign
export const createCampaign = async (data) => {
  try {
    const response = await fetch(`${API_URL}/campaigns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error creating campaign');
    return await response.text();
  } catch (error) {
    throw new Error(`Error creating campaign: ${error.message}`);
  }
};

// Creates a NEW Route
export const createRoute = async (data) => {
  try {
    const response = await fetch(`${API_URL}/routes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error creating route');
    return await response.text();
  } catch (error) {
    throw new Error(`Error creating route: ${error.message}`);
  }
};

// Creates a NEW Course
export const createCourse = async (data) => {
  try {
    const response = await fetch(`${API_URL}/course_pool`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error creating course');
    return await response.text();
  } catch (error) {
    throw new Error(`Error creating course: ${error.message}`);
  }
};

// UPDATES DB User Row with new USER PREFS
export const updateUserPrefs = async (username, data) => {
  try {
    const response = await fetch(`${API_URL}/user/topic_prefs/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error updating user preferences');
    return await response.text();
  } catch (error) {
    throw new Error(`Error updating user preferences: ${error.message}`);
  }
};

// UPDATES User Row Statistics
export const updateUserStats = async (username, data) => {
  try {
    const response = await fetch(`${API_URL}/user/stats/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error updating user statistics');
    return await response.text();
  } catch (error) {
    throw new Error(`Error updating user statistics: ${error.message}`);
  }
};

// UPDATES User Row Campaigns List
export const updateUserCampaigns = async (username, newCampaignId) => {
  try {
    const data = { newCampaignId }; // Adjust if necessary
    const response = await fetch(`${API_URL}/user/campaign/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error updating user campaigns');
    return await response.text();
  } catch (error) {
    throw new Error(`Error updating user campaigns: ${error.message}`);
  }
};

// UPDATES Campaign with NEW Route(s)
export const updateCampaignRoute = async (uuid, newRouteId) => {
  try {
    const data = { newRouteId }; // Adjust if necessary
    const response = await fetch(`${API_URL}/user/campaignroute/${uuid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error updating campaign route');
    return await response.text();
  } catch (error) {
    throw new Error(`Error updating campaign route: ${error.message}`);
  }
};

// UPDATES Route(s) with NEW Course
export const updateRoute = async (uuid, newCourseId) => {
  try {
    const data = { newCourseId }; // Adjust if necessary
    const response = await fetch(`${API_URL}/user/route/${uuid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Error updating route');
    return await response.text();
  } catch (error) {
    throw new Error(`Error updating route: ${error.message}`);
  }
};

// DELETE Campaign
export const deleteCampaign = async (uuid) => {
  try {
    const response = await fetch(`${API_URL}/campaignDel/${uuid}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error deleting campaign');
    return await response.text();
  } catch (error) {
    throw new Error(`Error deleting campaign: ${error.message}`);
  }
};

// DELETE Route
export const deleteRoute = async (uuid) => {
  try {
    const response = await fetch(`${API_URL}/routeDel/${uuid}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error deleting route');
    return await response.text();
  } catch (error) {
    throw new Error(`Error deleting route: ${error.message}`);
  }
};

// DELETE Course
export const deleteCourse = async (uuid) => {
  try {
    const response = await fetch(`${API_URL}/courseDel/${uuid}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error deleting course');
    return await response.text();
  } catch (error) {
    throw new Error(`Error deleting course: ${error.message}`);
  }
};
