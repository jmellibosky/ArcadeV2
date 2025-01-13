import { Routes, Route } from 'react-router-dom';

import AppUser from './AppUser';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element="" />
      <Route path="/login/password" element="" />
      <Route path="/*" element={<AppUser />} />
    </Routes>
  );
}
