import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';


function Redirector() {
  //const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // Convert to boolean

  console.log('isLoggedIn:', isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, then we don't need to redirect them.
  return null;
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/redirect" element={<Redirector />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
