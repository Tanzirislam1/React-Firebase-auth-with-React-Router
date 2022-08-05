import React, { useState } from 'react';

const Login = () => {
    /* toogle state : amra akta state k optional chaing kore toggle akare use kortase... */
    const [login, setLogin] = useState(false)
    return (
        <div className='container text-start'>
            <h2 className='text-center'>{
                /* toggle-chaining : login kora thakle login dekhabe er login kora nh thakle register dekhabe */
                login ? 'Login' : 'Register'}</h2>
            <form className='w-50 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                {
                    /* toggle-chaining : login kora nh thakle confirm password ta show korbe login kora thakle korbe nh..  */
                    !login && <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confrim Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
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
            </form>
        </div>
    );
};

export default Login;