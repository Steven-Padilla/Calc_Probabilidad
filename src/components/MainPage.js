import {Button} from 'reactstrap'
import './Calc.css'
import {useState} from 'react';


function MainPage() {
    const [tipoDatos,setTipoDatos]= useState(0);

    const selectDato=(dato)=>{
        setTipoDatos(dato)
    }


    return (

        <div className='container '>


            <h1 className='title '>Hola, bienvenido a la calculadora de Estadística y cálculo diferencial</h1>

            <h3 className='header '>El calculo a realizar, ¿es de datos agrupados o no agrupados?</h3>


            <div className='d-flex justify-content-center'>
                <Button
                    color="primary"
                    outline
                    onClick={()=>selectDato(1)}
                >
                    Datos agrupados
                </Button>

                <Button
                    color="danger"
                    outline
                    onClick={()=>selectDato(2)}
                >
                    Datos NO agrupados
                </Button>
            </div>

        </div>
    )
}

export default MainPage;