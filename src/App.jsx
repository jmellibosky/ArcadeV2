import { Routes, Route } from 'react-router-dom';

import AppUser from './AppUser';
import Login from './components/Login';
import LoginAdmin from './components/LoginAdmin';
import Users from './components/Users';
import CashInOut from './components/CashInOut';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/cash" element={<CashInOut />} />
      <Route path="/*" element={<AppUser />} />
    </Routes>
  );
}
