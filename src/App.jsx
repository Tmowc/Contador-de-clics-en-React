import React from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Display from './Display';
import Boton from './Boton';
import { useState } from 'react'; //Importando Hook

function App() {

  //Usamos Hooks para menejar el estado del contador
  const [valor, setValor] = useState(0); //setValor() es el metodo que permite actualizar 
                                         //el elemento valor

  //Generamos la funcion que maneja el contador de clic
  const manejarClic =()=>{
                         setValor(valor + 1); //al elemento valor (que tiene el valor por defecto)
                                                // le sumo 1
  };

  //Generamos la funcion que maneja el reinicio del contador
  const manejarReinicio = () =>{
        setValor(0); //reiniciamos el valor a cero y le pasamos CERO al elemento valor del array
  };
  
  

  return (
    <>
      <div className='principal-contenedor'>
        <div className='titulo-contenedor'>
            <img className='logo'
            src = {Logo}
            alt = 'Logo de la aplicación contador de clics'
          />
          <div className='texto-contenedor'>
               <h1>Contador de Clics </h1>
               <p>Construida en React, eficiencia en el consumo de recursos.</p> 
          </div>
        </div>

        

        <div className='botones-contenedor-principal'>
             <Display
                    valor = {valor}
             />
            <Boton
                        texto = 'Contar'
                        esContadorClic = {true}
                        manejarClic = {manejarClic}
                       
                        
                    />

            <Boton
                        texto = 'Reiniciar'
                        esContadorClic = {false}
                        manejarClic = {manejarReinicio}
                       
                        
            />
        </div>

        
        
      </div>

      

      
    </>
  )
}

export default App
