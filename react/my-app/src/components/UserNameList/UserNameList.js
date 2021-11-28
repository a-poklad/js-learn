import React from 'react';

function UserNameList(props) {

  const {users} = props;

  return (
    <ul>
        {users.map((el, i) => <li key={i}>{el}</li>)}
    </ul>
  )
}

export default UserNameList;
