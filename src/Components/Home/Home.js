import React, { useEffect, useState } from 'react';
import useUsers from '../../CustomHook/useUsers';
import SingleUsers from '../Users/SingleUsers/SingleUsers';
import { Link } from 'react-router-dom';

const Home = () => {
    /* set-hook-function-perameter-value : amra custom hook er function perameter set korse ba export korse oi function k aikhane import kortase and amra custom-hook function er perameter er moddhe url k perameter hisabe set korse oi peramter valuehisabe amra aikhane data er link set kortase....amra data link set kortase aikhane kinto fetch kortase custom hook er moddhe useEffect kore...amader shobidhar jonne...custom-hook function perameter hisabe nayoar karon hocche jei kono jayga theke amra function k import kore function er perameter value tae data set kore dite parbo... */
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users');
    // console.log(usersData);

    /* condition for slice data length: amra usersData k slice kore koyta data dekhabe sheita set korte pari kinto aikhane amra data er length k condition akare use kore data er length er akta amount value set kore dei jae amra koto ta data dekhate chai...  */
    if (usersData.length) {
        usersData.length = 6;
    }
    return (
        <div className='container py-5'>
            <h2>total users : {usersData.length}</h2>
            {/* data-container */}
            <div className="row gx-5 gy-4">
                <h2>Users</h2>
                {
                    usersData?.map(user => <SingleUsers key={user.id} user={user}></SingleUsers>)
                }
            </div>
            <Link to="/users" className='btn btn-primary'>Show All Users</Link>
        </div>
    );
};

export default Home;