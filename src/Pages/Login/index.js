import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng nhập logic
        console.log({ email, password });
    };

    const handleFacebookLogin = () => {
        // Xử lý logic đăng nhập bằng Facebook
        console.log('Login with Facebook');
    };

    const handleGoogleLogin = () => {
        // Xử lý logic đăng nhập bằng Google
        console.log('Login with Google');
    };

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="login-button">
                        Log In
                    </button>
                </div>
                <div className="social-login">
                    <button type="button" className="icon-button facebook" onClick={handleFacebookLogin}>
                        <FaFacebook size={20} />
                    </button>
                    <button type="button" className="icon-button google" onClick={handleGoogleLogin}>
                        <FaGoogle size={20} />
                    </button>
                </div>
                <div className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
