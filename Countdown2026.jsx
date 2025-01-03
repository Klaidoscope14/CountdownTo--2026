import React, { useState, useEffect } from 'react';
import './2026.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const year = 2025;
    const difference = +new Date(`January 1, ${year + 1} 00:00:00`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="countdown">
      <h1>Countdown to 2026</h1>
      <div className="timer">
        <div className="time-box">
          <span>{formatTime(timeLeft.days)}</span>
          <label>Days</label>
        </div>
        <div className="time-box">
          <span>{formatTime(timeLeft.hours)}</span>
          <label>Hours</label>
        </div>
        <div className="time-box">
          <span>{formatTime(timeLeft.minutes)}</span>
          <label>Minutes</label>
        </div>
        <div className="time-box">
          <span>{formatTime(timeLeft.seconds)}</span>
          <label>Seconds</label>
        </div>
      </div>
    </div>
  );
};

export default Countdown;