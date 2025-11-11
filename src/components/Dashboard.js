import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const [formData, setFormData] = useState(user);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    localStorage.setItem('loggedInUser', JSON.stringify(formData));
    localStorage.setItem('user', JSON.stringify(formData));
    alert('✅ Profile updated successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="text-center mb-4 fw-bold text-info">My Account</h2>
        <div className="form-floating mb-3">
          <input className="form-control" name="name" value={formData.name} onChange={handleChange} />
          <label>Name</label>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control" name="email" value={formData.email} onChange={handleChange} />
          <label>Email</label>
        </div>
        <div className="form-floating mb-4">
          <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange} />
          <label>Password</label>
        </div>
        <button className="btn btn-info w-100 mb-2" onClick={handleSave}>💾 Save Changes</button>
        <button className="btn btn-danger w-100" onClick={handleLogout}>🚪 Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
