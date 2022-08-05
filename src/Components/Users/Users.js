import React from 'react';
import useUsers from '../../CustomHook/useUsers';
import SingleUsers from '../Users/SingleUsers/SingleUsers';

const Users = () => {
    const allUsers = useUsers('https://jsonplaceholder.typicode.com/users');
    console.log(allUsers);
    return (
        <div className='container'>
            <h2>all users : {allUsers.length}</h2>
            <div className="row">
                {
                    allUsers?.map(user => <SingleUsers></SingleUsers>)
                }
            </div>
        </div>
    );
};

export default Users;