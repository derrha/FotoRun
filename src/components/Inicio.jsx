import React, {useEffect, useState} from "react";
import Logo from "./Logo";
import Boton from "./Boton";
import { ArrowBackOutline } from 'react-ionicons';
import { ArrowForwardOutline } from 'react-ionicons';

const Inicio = () =>{
    return  (
        <>
        <div className="flex w-full h-screen bg-slate-700 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <Logo/>
                <Boton
                    flechaUltimasCarreras={<ArrowBackOutline color={'#FFFFFF'}/>} 
                    flechaFuturasCarreras={<ArrowForwardOutline color={'#FFFFFF'}/>}
                    colorFuturasCarreras="bg-[#82e51d]"
                    colorUltimasCarreras="bg-[#82e51d]"
                />
            </div>
        </div>
        </>
    )
}

export default Inicio;