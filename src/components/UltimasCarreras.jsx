import React, {useEffect, useState} from "react";
import {getUltimasCarreras} from "../functions/Functions"
import { ArrowDownOutline } from 'react-ionicons'
import { ArrowForwardOutline } from 'react-ionicons';
import Card from "./Card";
import Boton from "./Boton";

const UltimasCarreras = () =>{
    const [carreras, setCarreras] = useState(null)
    useEffect(() => {
        getUltimasCarreras(setCarreras)
    },[])

    return  (
        <>
        <div className="w-full h-screen flex items-center flex-col">
        <Boton
                flechaUltimasCarreras={<ArrowDownOutline color={'black'}/>} 
                flechaFuturasCarreras={<ArrowForwardOutline color={'#FFFFFF'}/>}
                colorFuturasCarreras="bg-[#82e51d]"
                colorUltimasCarreras="bg-white"
                colorTextoUC="text-black"
            />
            <div className="max-w-[70%] flex gap-3 flex-wrap justify-center content-center pt-10">
                {carreras != null ? (
                    carreras.map(carrera => (
                        <>
                            <Card title={carrera.title}/>
                        </>
                    ))) : ('2') }
            </div>
        </div>

        </>
    )
}

export default UltimasCarreras;