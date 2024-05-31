import { useState, useEffect } from 'react';

function useScheduleTime() {
  const [startTime, setStartTime] = useState('12:00:00');
  const [endTime, setEndTime] = useState('');
  const [countdown, setCountdown] = useState('');

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const calculateTimeRemaining = () => {
    const startTimeObj = new Date(`01/01/2000 ${startTime}`);
    const endTimeObj = new Date(`01/01/2000 ${endTime}`);

    if (endTimeObj < startTimeObj) {
      return 'End time cannot be earlier than start time';
    }

    const timeDifference = endTimeObj.getTime() - startTimeObj.getTime();

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setCountdown(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const [hours, minutes, seconds] = countdown.split(':').map(Number);

      if (seconds > 0) {
        setCountdown(`${hours}:${minutes}:${seconds - 1}`);
      } else if (minutes > 0) {
        setCountdown(`${hours}:${minutes - 1}:59`);
      } else if (hours > 0) {
        setCountdown(`${hours - 1}:59:59`);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  return { startTime, endTime, countdown, handleStartTimeChange, handleEndTimeChange, calculateTimeRemaining };
}

export default useScheduleTime;