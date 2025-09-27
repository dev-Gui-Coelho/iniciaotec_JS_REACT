"use client";
import { useEffect, useState } from 'react';


export default function InputName({value, setValueNome}){
    const [nome, setNome] = useState("");

    useEffect(()=>{
        console.log(nome)
    },[nome]);

    return (
        <>
            <label 
                htmlFor="iptName"
                className="
                    text-white
                    text-[18px]">Digite seu nome completo:</label>
            <input 
                type="text" 
                id="iptName" 
                value={value} 
                onChange={(e)=>setValueNome(e.target.value)} 
                className="border-white
                            caret-[#428829]
                            border-b-1
                            bg-white
                            rounded-[6px]
                            outline-0
                            w-[93%]
                            text-black
                            mb-[4%]
                            mt-[1%]
                            h-[30px]
                            p-[2%]
                            shadow-[2px_7px_15px_#245C10]"/>
        </>
    )
}
