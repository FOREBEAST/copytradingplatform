// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MetaMaskButton from './components/MetaMaskButton';
import TradersList from './pages/TradersList';

const App = () => {
    return (
        <Router>
            <div className="App">
                <MetaMaskButton />
                <Routes>
                    <Route path="/" element={<TradersList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
