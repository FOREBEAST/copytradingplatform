// frontend/src/pages/TradersList.js
import React, { useEffect, useState } from 'react';

const TradersList = () => {
    const [traders, setTraders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/traders')
            .then(response => response.json())
            .then(data => setTraders(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Traders List</h1>
            <ul>
                {traders.map(trader => (
                    <li key={trader._id}>{trader.name} - Win Rate: {trader.winRate}%</li>
                ))}
            </ul>
        </div>
    );
};

export default TradersList;
