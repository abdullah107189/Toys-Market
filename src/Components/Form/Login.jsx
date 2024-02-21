import React, { useContext } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
const Login = () => {
    useTitle('Login')
    const { loginUser } = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    console.log('from', from, "location", location)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        loginUser(email, pass)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div className='shadow-lg rounded-lg mt-3'>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>

            <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p>Haven't Account? <Link to={'/reg'} className='text-blue-500'>Create Account</Link></p>
            </form>
        </div>
    );
};

export default Login;