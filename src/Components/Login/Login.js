import React, { useState } from 'react';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    /* toogle state : amra akta state k optional chaing kore toggle akare use kortase... */
    const [login, setLogin] = useState(false)

    const [confirmError, setConfirmError] = useState('');

    /* amra aikhane akta state declair korse state er vitor kicu object diclair korse empty string hisabe ai state er [event.target.name] = event.target.value set kortase normally empty string thakbe jokhon amra kicu likhbo tokhon oi object property ta k return korbe amra oi property er moddhe ja likhse...amra handleFormInput er moddhe state tah set korse and proti ta input er moddhe onBlur kortase ai onBlur er moddhe arrow function niye ter perameter e event k call kortase and handler function k call kore ter moddhe o event k set kortase...amra userinfo state k console korle dekhte parbo amra input field gulo tae ja likhbo oi field gulo k akta oject akaree return kortase and amra object theke oi property gulo k access korte pari... */
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })

    // create user (sign-up/register)
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    /* for login */
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [loginUser, loginLoading, loginError] = useAuthState(auth);

    const handleFormInput = event => {
        // console.log(event.target.name, event.target.value);
        userInfo[event.target.name] = event.target.value;
    }

    const handleSubmit = event => {
        /* change default behaveiour : jokhon submit korbo tokhon from auto reload kore shei behave tah change korse... */
        event.preventDefault();
        // console.log(userInfo);

        /* if er moddhe jodi login ta false hoy !login hoy... aikhane !login bolte bujhay register k jodi !login hoy tahole user k create korbe means signup korte dibe...er else login er kaj ta korbe.. */
        if (!login) {
            /* validation input field */
            if (userInfo.password !== userInfo.confirmPass) {
                setConfirmError('password can not matched');
                return;
            }
            /* uporer condition jodi nh mile tahole mne password jodi mile jay tahole error show korbe nh... */
            setConfirmError('');
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }
        else {
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }
    }

    /* redirected */
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (loginUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container text-start'>
            <h2 className='text-center'>{
                /* toggle-chaining : login kora thakle login dekhabe er login kora nh thakle register dekhabe */
                login ? 'Login' : 'Register'}</h2>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event) => handleFormInput(event)} type="text" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={(event) => handleFormInput(event)} type="password" className="form-control" name='password' id="exampleInputPassword1" />
                </div>

                {
                    /* toggle-chaining : login kora nh thakle confirm password ta show korbe login kora thakle korbe nh..  */
                    !login && <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confrim Password</label>
                        <input onBlur={(event) => handleFormInput(event)} type="password" className="form-control" name='confirmPass' id="exampleInputPassword1" />
                    </div>
                }

                <div className="mb-3 form-check">
                    {/* set-toggle-onChange : login or register toggle onChange : onChange er moddhe arrow function use kore amra login state tah change kortase state k set kore ditase !login not equal login hocche login er ulta kora normally login state kae amra use korse kinto useState e false set kore rakhse tai register show kortase nh click korle toggle hbe... */}
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => setLogin(!login)} />

                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">{
                    /* toggle-chaining : amra login kora thakle login show korbe er login kora nh thakle register... */
                    login ? 'Login' : 'Register'}</button>

                <p className='text-danger'>
                    {confirmError}
                </p>

                {
                    /* firebase hook theke error er name change kore createError dise jodi createError true hoy tahole ter moddhe error message ta k dekhabe... */
                    createError && <p className='text-danger'>
                        {createError.message}
                    </p>
                }

                {
                    /* user jodi thik vabe create hoy tahole akta success message dibe amra user name er poriborte createUser name dise jodi createUser true hoy tahole create user successfull dekhabe.. */
                    createUser && <p className='text-success'>Create user Successfully</p>
                }

                {
                    /* user jodi amra already thake mane hocche amra akta email diye akber signup korse jodi abar shei email abar use kore abar signup kori tahole error dibe user already exists amra login e gale login korabe */
                    user && <p className='text-success'>User login successfully</p>
                }
            </form>
        </div>
    );
};

export default Login;