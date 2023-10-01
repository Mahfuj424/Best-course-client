/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.state?.from?.pathname || '/'
    console.log(pathName);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if ((email, password)) {
            signIn(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate('/')
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }


    const handleGoogleUser = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                navigate(pathName)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubUser = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);
                navigate(pathName)
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <Helmet>
                <title>
                    Best Course | Login
                </title>
            </Helmet>

            <div className="hero min-h-screen  mb-3">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Please Login</h1>

                    </div>
                    <div className="card  flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered border-[#00FF84]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered border-[#00FF84]" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn fill-btn">Login</button>
                            </div>
                            <p>Are you new user? <Link className='link text-[#140342]' to='/register'>Please Register</Link></p>
                            <div>
                                <button className='button w-full' onClick={handleGoogleUser}><span><FcGoogle /></span>Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;