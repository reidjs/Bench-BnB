import React from 'react';
import { Link } from 'react-router-dom';
const Greeting = ({ currentUser, logOut }) => {
  if (currentUser) {
    return (
     <div>
       <h1>Welcome {currentUser.username}!</h1>
       <button onClick={logOut}>Log out!</button>
     </div>
   );
 } else {
   return (
     <div>
       <Link to="/signup">Sign up</Link>
       <Link to="/login">Log in</Link>
     </div>
   );
 }
};
export default Greeting;
