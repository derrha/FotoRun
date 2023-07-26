import React,{useEffect, useState} from "react";

const Card = (props) =>{

    return  (
        <>
            <div className="w-[200px] h-[200px] overflow-hidden bg-[#77e800] rounded-xl">
                <div className="h-[65%] w-full items-center justify-center flex flex-col bg-[##77e800] gap-1">
                    <h1 className="text-white uppercase font-bold text-2xl text-center">MARATON DE ROSARIO</h1>
                    <p className="text-xs text-center">fecha | junio 23</p>
                </div>
                <div className="bg-[#2f3035] w-full h-[35%] flex justify-center items-center flex-col">
                    <h3 className="text-2xl text-white font-bold">LOGORANDOM</h3>
                   {/*<img className="h-[55px] fill-white" src="/img/Nike-Logo.png" alt="logo"/>*/} 
                </div>
            </div>
        </>
    )
}

export default Card;