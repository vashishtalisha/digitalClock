import React, { useState, useEffect } from 'react';
import './Clock.css';
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    const formatTime = (time) => {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
            {formatTime(time)}
        </div>
    );
}

export default Clock;
