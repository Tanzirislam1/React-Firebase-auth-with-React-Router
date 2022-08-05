import React from 'react';
import { Link } from 'react-router-dom';

const SingleUsers = ({ user, children }) => {
    /* amra user k optional-chaining korte pari jodi droker hoy amra user jodi thake tahole user k deo er nh hole || {} empty object deo..  */
    const { name, id } = user || {};
    console.log(children);

    /* children object property */
    const { email, phone } = children || {};
    return (
        /* set column for every single data 12/4 = 3 */
        <div className='col-4'>
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>{id}</p>
                    <h5 className="card-title">{name}</h5>
                    <p>Email: {email}</p>
                    <p>phone: {phone}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* dynamic route id setup dynamically */}
                    <Link to={`/user/${id}`} className="btn btn-primary">User info</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUsers;