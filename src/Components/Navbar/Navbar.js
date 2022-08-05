import React from 'react';
import { Link } from "react-router-dom";
import CustomLink from '../../CustomLink/CustomLink';

const Navbar = () => {
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;