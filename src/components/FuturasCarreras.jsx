import React, {useEffect, useState} from "react";
import {getFuturasCarreras} from "../functions/Functions"
import { ArrowDownOutline } from 'react-ionicons'
import { ArrowBackOutline } from 'react-ionicons';
import Card from "./Card";
import Boton from "./Boton";

const FuturasCarreras = () =>{
    const [carreras, setCarreras] = useState(null)
    useEffect(() => {
        getFuturasCarreras(setCarreras)
    },[])

    return  (
        <>
        <div className="w-full h-screen flex items-center flex-col">
            <Boton
                flechaUltimasCarreras={<ArrowBackOutline color={'#FFFFFF'}/>} 
                flechaFuturasCarreras={<ArrowDownOutline color={'black'}/>}
                colorFuturasCarreras="bg-white"
                colorUltimasCarreras="bg-[#82e51d]"
                colorTextoFC="text-black"
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

export default FuturasCarreras;