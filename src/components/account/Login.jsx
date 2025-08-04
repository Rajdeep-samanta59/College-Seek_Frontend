import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Logo from '../../web_images/Logo.png';

const loginInitialValues = {
    username: '',
    password: '',
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ setUserAuthenticated }) => {
    const { setAccount } = useContext(DataContext);

    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');
    const [account, toggleAccount] = useState('login');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); // New loading state

    const navigate = useNavigate();

    useEffect(() => {
        setError('');
    }, [login]);

    useEffect(() => {
        setError('');
        setLogin(loginInitialValues);
        setSignup(signupInitialValues);
    },[account]);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const toggleSignup = () => {
        setError('');
        toggleAccount(account === 'signup' ? 'login' : 'signup');
        setLogin(loginInitialValues);
        setSignup(signupInitialValues);
    };

    const loginUser = async () => {
        if (!login.username || !login.password) {
            setError('Please fill in all fields correctly again! Something went wrong');
            return;
        }
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login.username);
        if (!isValidEmail) {
            setError('Please enter a valid email ID');
            return;
        }
        setError('');
        setLoading(true); // Set loading state to true during login request
        try {
            let response = await API.userLogin(login);
            if (response.isSuccess) {
                setError('');
                sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
                setAccount({ name: response.data.name, username: response.data.username });
                setUserAuthenticated(true);
                setLogin(loginInitialValues);
                navigate('/');
            }
        } catch (error) {
            setError('No such Email ID or, Password exists! Please Try Again');
        } finally {
            setLoading(false); // Set loading state back to false after login attempt
        }
    };

    const signupUser = async () => {
        if (!signup.name || !signup.username || !signup.password) {
            setError('Please fill in all fields');
            return;
        }
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signup.username);
        if (!isValidEmail) {
            setError('Please enter a valid Email ID');
            return;
        }
        setError('');
        const isValidPassword = signup.password.length >= 8;
        if (!isValidPassword) {
            setError('Password must be at least 8 characters long');
            return;
        }
        setError('');
        setLoading(true); // Set loading state to true during signup request
        try {
            let response = await API.userSignup(signup);
            if (response.isSuccess) {
                setError('');
                setSignup(signupInitialValues);
                toggleAccount('login');
            }
        } catch (error) {
            setError('Something went wrong! Please Try Again');
        } finally {
            setLoading(false); // Set loading state back to false after signup attempt
        }
    };

    const handleButtonClick = () => {
        window.open('https://pass-genius.vercel.app/', '_blank');
    };

    return (
        <div className="w-96 mx-auto shadow-2xl">
            <div>
                <img 
                    src={Logo} 
                    alt="Seek" 
                    className="w-64 flex mx-auto pt-12 pb-0 rounded"
                />
                {account === 'login' ? (
                    <div className="px-9 py-6 flex flex-1 overflow-auto flex-col space-y-5">
                        <div className="relative">
                            <input
                                type="text"
                                value={login.username}
                                onChange={(e) => onValueChange(e)}
                                name="username"
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300"
                                placeholder="Enter Email ID"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={login.password}
                                onChange={(e) => onValueChange(e)}
                                name="password"
                                className="w-full px-3 py-2 pr-10 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300"
                                placeholder="Enter Password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                                    </svg>
                                )}
                            </button>
                        </div>

                        {error && <p className="text-xs text-red-500 leading-none mt-2.5 font-semibold">{error}</p>}
                        {loading ? (
                            <button className="w-full bg-gray-400 text-white py-3 rounded text-sm font-medium">
                                Logging In
                            </button>
                        ) : (
                            <button 
                                className="w-full bg-orange-500 text-white py-3 rounded text-sm font-medium hover:bg-orange-600 transition-colors duration-300"
                                onClick={() => loginUser()}
                            >
                                Login
                            </button>
                        )}
                        <p className="text-gray-500 text-xs text-center">OR</p>
                        <button 
                            className="w-full bg-white text-blue-600 py-3 rounded text-sm font-medium shadow-md hover:bg-gray-50 transition-colors duration-300 mb-12"
                            onClick={() => toggleSignup()}
                        >
                            Create an account
                        </button>
                    </div>
                ) : (
                    <div className="px-9 py-6 flex flex-1 overflow-auto flex-col space-y-5">
                        <div className="relative">
                            <input
                                type="text"
                                value={signup.username}
                                onChange={(e) => onInputChange(e)}
                                name="username"
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300"
                                placeholder="Enter Email ID"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={signup.password}
                                onChange={(e) => onInputChange(e)}
                                name="password"
                                className="w-full px-3 py-2 pr-10 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300"
                                placeholder="Enter Password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                value={signup.name}
                                onChange={(e) => onInputChange(e)}
                                name="name"
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300"
                                placeholder="Enter Name"
                            />
                        </div>
                        <button 
                            className="w-full bg-gray-200 text-gray-700 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors duration-300"
                            onClick={handleButtonClick}
                        >
                            Generate Password
                        </button>

                        {error && <p className="text-xs text-red-500 leading-none mt-2.5 font-semibold">{error}</p>}
                        {loading ? (
                            <button className="w-full bg-gray-400 text-white py-3 rounded text-sm font-medium">
                                Signing Up
                            </button>
                        ) : (
                            <button 
                                className="w-full bg-white text-blue-600 py-3 rounded text-sm font-medium shadow-md hover:bg-gray-50 transition-colors duration-300"
                                onClick={() => signupUser()}
                            >
                                Signup
                            </button>
                        )}
                        <p className="text-gray-500 text-xs text-center">OR</p>
                        <button 
                            className="w-full bg-orange-500 text-white py-3 rounded text-sm font-medium hover:bg-orange-600 transition-colors duration-300"
                            onClick={() => toggleSignup()}
                        >
                            Already have an account
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;