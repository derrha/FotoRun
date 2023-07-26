import React from "react";
import { CameraOutline } from 'react-ionicons';


const Logo = () =>{
    return  (
        <div className="flex justify-end items-end flex-col p-5">
            <div className="flex justify-center items-center gap-3">
                <CameraOutline
                    color={'#82e51d'}
                    height="100px"
                    width="100px"
                />
                <h1 className="text-white text-6xl font-extrabold">FOTO<span className="text-[#82e51d]">RUN</span></h1>
            </div>
            <p className="uppercase text-xs text-white">powered by runtag</p>
        </div>
    )
}

export default Logo;