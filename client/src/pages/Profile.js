import React from 'react';
import Auth from '../utils/auth';
const Profile = () => {
   const { data } = Auth.getProfile();
   console.log(data);
   return <h2>logged in</h2>;
};
export default Profile;
