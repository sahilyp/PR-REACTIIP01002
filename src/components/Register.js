import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    alert('✅ Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center mb-4 fw-bold text-primary">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="name" placeholder="Name" required onChange={handleChange} />
            <label>Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" name="email" placeholder="Email" required onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="form-floating mb-4">
            <input type="password" className="form-control" name="password" placeholder="Password" required onChange={handleChange} />
            <label>Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2">Sign Up</button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
