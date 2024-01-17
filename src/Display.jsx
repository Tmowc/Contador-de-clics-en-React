import {React} from 'react';
import './Display.css';

function Display( {valor} ) {
    return(    
            <div className='display-contenedor'>
                {valor}
            </div>
    )
}

export default Display;