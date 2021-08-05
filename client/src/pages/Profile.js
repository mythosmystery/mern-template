import React from 'react';
import { getProfile } from '../utils/auth';
const Profile = () => {
   const user = getProfile();
   console.log(user);
   return <h2>logged in</h2>;
};
export default Profile;
