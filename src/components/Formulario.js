import React, { useState } from 'react';
import styled from '@emotion/styled'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none; 
`;
const ImputRadio = styled.input`
    margin: 0 1rem;
`;
const Boton = styled.button`
    background-color: #00838F;
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none; 
    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`; 
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;
const Formulario = () => {

    const [datos, guardarDatos] = useState({
        marca:'',
        plan:'',
        year: ''
    });
    const [error, guardarError] = useState(false);
    //extraer los valores del state
    const {marca,plan, year} = datos;
    //Leer los datos del formulario 
    const obtenerInformacion = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    //cuando se hace submit
    const cotizarSeguro = (e) => {
        e.preventDefault();
        if(marca.trim() === '' || plan.trim() === '' || year.trim() === '' ){
            guardarError(true);
            return;
        }
        guardarError(false);

    }
    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            {
                error ? <Error>Campos Obligatorios</Error>: null
            }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">--Seleccione--</option>
                    <option value="Americano">Americano</option>
                    <option value="Europeo">Europeo</option>
                    <option value="Asiático">Asiático</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <ImputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan==="basico"}
                    onChange={obtenerInformacion}
                />Básico
                <ImputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan==="completo"}
                    onChange={obtenerInformacion}
                />Completo
            </Campo>
            <Boton
                type="submit"
                >
                Cotizar
            </Boton>
        </form>
     );
}
 
export default Formulario;