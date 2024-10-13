//tracks how many minutes a user has spent on a problem

import React, { useEffect, useState } from 'react';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const time = props;
  useEffect(() => {
    let interval = null;
    if (time) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        if (seconds === 59) {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, seconds]);

  return (
    <div>
      <p>
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};
export default Timer;
