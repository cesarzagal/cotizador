import React from 'react'
import Header from './components/Header'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'

const Contenedor= styled.div`
    max-width: 70%;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #fff;
    padding: 3rem;
`;



const App = () => {
    return ( 
        <Contenedor>
            <Header 
                titulo="Cotizador de Seguros"
            />
            <ContenedorFormulario>
                <Formulario/>
            </ContenedorFormulario>
        </Contenedor>
     );
}
 
export default App;