import React, { useEffect, useMemo, useState } from 'react';
import UserNameList from '../UserNameList';

function Users(props) {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(resUsers => setUsers(resUsers));
    }, []);

  const usersNames = useMemo(() => users.map(user => user.username), [users]);


    return (
        <>
            <p>{props.count}</p>
            <UserNameList users={usersNames}/>
        </>
    )
}

export default Users;
