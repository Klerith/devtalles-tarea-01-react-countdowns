/*
  ! Objectivo:
  El objetivo es constuir una cuenta regresiva

  Usar el código dado para constuirlo, pausarlo, animarlo y reanudarlo.

  Validaciones son requeridas



*/

import { RiPauseFill, RiPlayFill, RiRestartLine } from 'react-icons/ri';
import { useCountdown } from "../hooks/useCountdown";


export const CountdownPage = () => {

  
  const {
    seconds,
    startTimer,
    isRunning,
    pauseTimer,
    restartTimer,
  } = useCountdown({ initialValue: 5 });




  return (
    <div className="w-6/12 flex flex-col items-center">
      <span className="countdown font-mono text-6xl">
        <span style={{ '--value': seconds }}></span>
      </span>

      <div className="divider"></div>

      <div className="flex gap-2">

        {
          isRunning
            ? (

              <button onClick={() => pauseTimer()} className="btn btn-secondary btn-circle">
                <RiPauseFill />
              </button>
            )
            : (
              <button onClick={() => startTimer()} className="btn btn-primary btn-circle">
                <RiPlayFill />
              </button>

            )
        }


        <button onClick={() => restartTimer()} className="btn btn-circle">
          <RiRestartLine />
        </button>
      </div>

    </div>
  )
}
