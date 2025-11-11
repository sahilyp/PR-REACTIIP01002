import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      navigate('/dashboard');
    } else {
      alert('❌ Invalid email or password!');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center mb-4 fw-bold text-success">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" name="email" placeholder="Email" required onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="form-floating mb-4">
            <input type="password" className="form-control" name="password" placeholder="Password" required onChange={handleChange} />
            <label>Password</label>
          </div>
          <button className="btn btn-success w-100 py-2">Login</button>
        </form>
        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
