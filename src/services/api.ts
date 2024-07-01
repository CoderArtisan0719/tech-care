const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const USERNAME = 'coalition';
const PASSWORD = 'skills-test';

const getAuthHeader = () => {
  const token = btoa(`${USERNAME}:${PASSWORD}`);
  return `Basic ${token}`;
};

export const fetchPatientData = async () => {
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': getAuthHeader()
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
