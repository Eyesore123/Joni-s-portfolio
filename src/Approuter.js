import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Import your LandingPage component
import QuizApp from './components/App'; // Import your QuizApp component
import './components/styles.css';

const Approuter = () => {
    return (
        <BrowserRouter>
            <Routes>  {/* Routes wrapper for the individual routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/quiz" element={<QuizApp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Approuter;
