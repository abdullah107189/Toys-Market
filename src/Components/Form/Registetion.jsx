import React, { useContext } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
const Registretion = () => {
    useTitle('Registretion')
    const { createUser } = useContext(authContext)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;
        const confirm_Pass = form.confirm_Pass.value;
        if (confirm_Pass !== pass) {
            return toast.error('not match confirm password')
        }
        if (pass.length < 6) {
            return toast.error('please minimum set 6 charecter')
        }
        createUser(email, pass)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updatePhotoAndName(loggedUser, name, photoURL)
                form.reset()
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    const updatePhotoAndName = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {

            }).catch((error) => {

            });
    }
    return (
        <div className='shadow-lg rounded-lg mt-3'>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <form className="card-body" onSubmit={handleLogin}>
                <div className='md:grid grid-cols-2 gap-4'>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photoURL' placeholder="Your photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='confirm_Pass' placeholder="confirm password" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Register</button>
                </div>
                <p>Have an Account? <Link to={'/login'} className='text-blue-500'>login</Link></p>
            </form>

        </div>
    );
};

export default Registretion;