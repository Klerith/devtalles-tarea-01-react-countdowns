import { useState, useRef, useEffect } from "react";

interface Options {
  initialValue?: number;
}

export const useCountdown = ({ initialValue = 10 }: Options) => {
  
  const [ seconds, setSeconds ] = useState(initialValue);
  const [ isRunning, setIsRunning ] = useState(false)

  const timerRef = useRef<number>();

  // const percentage = (seconds / initialValue ) * 100; // Todo: Realizar el calculo


  const startTimer = () => {
    if ( seconds <= 0 ) return;

    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setSeconds(state => state - 1);
      console.log('tick');
    }, 1000);
  }

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  }

  const restartTimer = () => {
    pauseTimer();

    setSeconds(initialValue);
  }


  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(timerRef.current);
    }
  }, [seconds]);

  useEffect(() => {
    return () => {
      console.log('destroyed');
      clearInterval(timerRef.current);
    }
  }, []);

  
  
  return {
    // Properties
    seconds,
    isRunning,
    percentage: (seconds / initialValue ) * 100,

    // Métodos
    startTimer,
    pauseTimer,
    restartTimer,
  }
}
