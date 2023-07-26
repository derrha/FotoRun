import React from "react";

const Boton = (props) => {
    const buttonFuturasCarrerasClass = `${props.colorTextoFC} cursor-pointer w-full hover:bg-white transition duration-150 ease-out hover:text-black overflow-hidden rounded-r-lg p-3 font-bold flex justify-center items-center gap-2 uppercase ${props.colorFuturasCarreras}`
    const buttonUltimasCarrerasClass = `${props.colorTextoUC} cursor-pointer w-full border-r-2 hover:bg-white transition duration-150 ease-out hover:text-black overflow-hidden rounded-l-lg p-3 font-bold flex justify-center items-center gap-2 uppercase ${props.colorUltimasCarreras}`

    return (
        <>
            <div className={`flex flex-row justify-center items-center text-white rounded-lg w-full `}>
                <a href="/ultimas-carreras" className={buttonUltimasCarrerasClass}>{props.flechaUltimasCarreras}Ultimas Carreras</a>
                <a href="/futuras-carreras" className={buttonFuturasCarrerasClass}>Futuras Carreras {props.flechaFuturasCarreras}</a>
            </div>
        </>
    );
};

export default Boton;
