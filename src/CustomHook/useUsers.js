import React, { useEffect, useState } from 'react';

/* function er perameter hisabe url set kora hoise ai function k amra jei kono jaygay call kore ter perameter value tae amra url link ta set kore diye je kono jayga theke data load korte pari...... */
const useUsers = (url) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return users;
};

export default useUsers;