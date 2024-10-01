import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not logged in</h1>;

  return (
    <>
      <h1>Username: {user.username || "Unknown"}</h1>
      <h1>Password: {user.password ? "******" : "Not set"}</h1> {/* Masking password for better security */}
    </>
  );
};

export default Profile;
