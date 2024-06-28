import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../store/slices/authSlice';
import img from '../assets/Default_A_modern_social_media_dashboard_site_illustration_rend_3.jpg'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Attempting login...');
      const resultAction = await dispatch(login({ email, password }));
      console.log('Login result:', resultAction);
      if (resultAction.type === login.fulfilled.type) {
        console.log('Login successful, attempting navigation...');
        navigate('/dashboard');
      } else {
        console.log('Login failed:', resultAction.error);
      }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded" type="text" id="name" placeholder="Name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Email" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" type="password" id="password" placeholder="Password" required />
                        </div>
                        <button disabled={loading} className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600">Sign Up</button>
                    </form>
                    <p className="mt-6 text-center">
                        Already have an account? <Link to="/" className="text-rose-500 hover:underline">Login</Link>
                    </p>
                </div>
                <div className='hidden md:block w-1/2'>
                    <img className='object-cover w-full h-full' src={img} alt="Dashboard illustration" />
                </div>
            </div>
        </div>
    );
};

export default Signup;