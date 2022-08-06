import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user?.email);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Random User</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink to="/" className="nav-link active" ></CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/home" className="nav-link" >Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/user" className="nav-link">User</CustomLink>
                        </li>
                    </ul>
                    <div>
                        <CustomLink to="/login">Login</CustomLink>
                    </div>
                    <span>
                        {
                            /* user nh thake USER ai text ta show korbe er jodi user thake tahole amader email ta show korbe */
                            !user ? '' : <span>{user.email} <button onClick={() => signOut(auth)}>Signout</button></span>
                        }
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;