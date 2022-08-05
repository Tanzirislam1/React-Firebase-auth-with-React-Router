import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../../CustomHook/useUsers';
import SingleUsers from '../Users/SingleUsers/SingleUsers';

const UserInfo = () => {
    // Get the userId param from the URL.
    let { userId } = useParams();
    // console.log(userId);

    /* set-single-user-info : amra useParams kore dynamic-route er jei id name oita k destructure kore singel user er id tah k paitase amra singel user er data gulo pete amra hook function k import kore ter moddhe function perameter value hisabe jei url set korbo oi url er moddhe dynamic vabe amra dynamic-route-id-name k dynamic vabe set kortase single-user er id access korar jonne...terpor amra userId k console korle single id pabo...amra id chara baki information dekhate amra akta allUsers variable er moddhe hook import kore data load korar jonne url er moddhe all single user er data access korte amra dynamic url id set kortase jer moddhe dynamic-route-id-name set kora hocche... ai variable er moddhe all users data ase kinto data gulo array akare ase tai index value set kortase [0] index... ai variable er 0 index set kore ditase allUsers[0] singel users er shob gulo data access korte terpor singleUsers component er moddhe props akare single user k pathacchi ter moddhe amra allUsers[0] aita set kore ditase single user er info er data dekhate... */
    const allUsers = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    // console.log(allUsers[0]);
    return (
        <div className='text-center container'>
            <h2>Users Info : {userId}</h2>
            <SingleUsers user={allUsers[0]}>
                {/* single-user-children-load-object-value : amra component er moddhe dynamic vabe object create kortase email or phone ai component er moddhe amra {children} k destructure kore amra ai object gulo access korte parbo... */}
                {
                    {email:allUsers[0]?.email, phone: allUsers[0]?.phone}
                }
            </SingleUsers>
        </div>
    );
};

export default UserInfo;