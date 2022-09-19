import React from "react";
import { useSelector } from 'react-redux';

function Users() {
  const users = useSelector( state => state.users );

  const userElements = users.map( user => <li key={user.id}>{ user.username }</li>)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users currently in the store */}
        { userElements }
        { `Total Users: ${userElements.length}` }
      </ul>
    </div>
  );
}

export default Users;
