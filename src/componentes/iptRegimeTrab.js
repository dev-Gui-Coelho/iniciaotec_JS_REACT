"use client"
import { useEffect, useState } from "react"

export default function IptRegimeTrab({value, setValueRegTrab}){
    const [carga_h, setCarga_h] = useState("")

    useEffect(()=>{
        console.log(carga_h)
    },[carga_h])

    return(
        <>
            <h5 className="text-white text-[18px] mb-[1%]">Assinale seu regime de trabalho: </h5>
            <div>
                <label 
                    htmlFor="ipt_regime_hora" className="text-white text-[16px]">20h: </label>
                <input 
                    id="ipt_regime_hora" 
                    type="radio" 
                    name="carga_horaria"
                    value="20h"
                    onChange={(e)=>setValueRegTrab(e.target.value)}
                    className="
                        w-4
                        h-4
                        accent-[#428829]
                        cursor-pointer"/>
            </div>
            <div>
                <label 
                    htmlFor="ipt_regime_hora_2" className="text-white text-[16px]">40h: </label>
                <input 
                    id="ipt_regime_hora_2" 
                    type="radio" 
                    name="carga_horaria"
                    value="40h"
                    onChange={(e)=>setValueRegTrab(e.target.value)}
                    className="
                        w-4
                        h-4
                        accent-[#428829]
                        cursor-pointer"/>
                    
            </div>
            <div>
                <label 
                    htmlFor="ipt_regime_hora_3" className="text-white text-[16px] ">40h DE: </label>
                <input 
                    id="ipt_regime_hora_3" 
                    type="radio" 
                    name="carga_horaria"
                    value="40h DE"
                    onChange={(e)=>setValueRegTrab(e.target.value)}
                    className="
                        w-4
                        h-4
                        accent-[#428829]
                        cursor-pointer"/>
                    
            </div>
        </>
    )
}