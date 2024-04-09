
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './pages/Users.jsx'
import UserProfile from './pages/UserProfile.jsx';
import Login from "./components/Login.jsx";
import CreatePassword from "./components/CreatePassword.jsx";
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/change-password/:id" element={<CreatePassword />} errorElement={<Login/>}/>
            <Route path="/app/dashboard" element={<Dashboard />} errorElement={<Login/>}/>
            <Route path="/app/profile" element={<UserProfile />} errorElement={<Login/>}/>
        </Routes>
    </Router>
  )}

export default App;



