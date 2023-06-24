/**
 * ! Objetivo: 
 * Similar al anterior, hay que constuir un timer
 * 
 * Pero la idea es convertir los segundos restantes en un porcentaje
 * que muestre el radia-progress siempre al inicio al 100% y dependiendo del valor
 * ajuste el porcentaje correctamente.
 * 
 * No olvidar de las validaciones
 * 
 */

import { useState } from "react"
import { RiPauseFill, RiPlayLine, RiRestartLine } from "react-icons/ri";


interface Props {
  initialValue?: number;
}

export const RadialPage = ({ initialValue = 100 }: Props) => {

  // Todo: cambiar el número de 100 a 10 o cualquier otro número
  // pero el porcentaje del radial-progress debe de ser correcto basado en ese numero
  const [seconds, setSeconds] = useState(initialValue);


  const percentage = seconds; // Todo: Realizar el calculo

  
  return (
    <div className="w-4/12 flex flex-col items-center">
        
        {/* Radial Primario */}
        <div 
          className="radial-progress bg-secondary text-primary-content border-4 border-secondary text-3xl text-center" 
          style={{'--value': percentage, "--size":'12rem', '--thickness':'2rem'}}>
            <span>{ seconds }</span>
            <span className='text-sm'>secs</span>
        </div>

        {/* Radial para hacer efecto de sombra */}
        <div 
          className="absolute radial-progress text-primary-content opacity-40 border-4 border-secondary" 
          style={{'--value':100, "--size":'12rem', '--thickness':'2rem'}}></div>

        <div className="divider"></div>

        <div className="flex mt-2 gap-2">
          
        <button 
            className="btn btn-accent">
            <RiPlayLine />
          </button>

          <button className="btn">
            <RiPauseFill />
          </button>
          
          <button className="btn hover:btn-accent">
            <RiRestartLine />
          </button>

        </div>


    </div>
  )
}
