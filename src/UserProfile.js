import React from 'react';

// UserProfile Component
const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>About:</strong> {user.about}</p>
    </div>
  );
};

export default UserProfile;
