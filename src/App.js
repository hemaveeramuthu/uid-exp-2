import React from 'react';
import UserProfile from './UserProfile';
import './App.css'; // Importing the CSS file

const App = () => {
  const userData = {
    name: "HEMADHARUNIKA.V",
    email: "hemadharunikav.22it@kongu.edu",
    phone: "123-456-4444",
    address: "kongu engineering college perundurai",
    about: "A passionate developer with a love for coding."
  };

  return (
    <div className="app">
      <UserProfile user={userData} />
    </div>
  );
};

export default App;
