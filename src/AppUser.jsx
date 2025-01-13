import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';

export default function AppUser() {
    return (    
        <>
        <div id="user-info">
            <span>Habitación 303</span>
            <span>$ 5000.00</span>
        </div>
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element="" />
                <Route path="/drinks" element="" />
                <Route path="/drinks/choose" element="" />
                <Route path="/confirm" element="" />
            </Routes>
        </div>
        </>
    );
}