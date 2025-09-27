"use client"
import { useEffect, useState } from "react"

export default function IptRegimeTrab({value, setValueRegTrab}){
    const [carga_h, setCarga_h] = useState("")

    useEffect(()=>{
        console.log(carga_h)
    },[carga_h])

    return(
        <>
            <h5 id="lbl_regTrab">Assinale seu regime de trabalho: </h5>
            <div>
                <label 
                    htmlFor="ipt_regime_hora" className="lbl_options">20h: </label>
                <input className="ipt_options"
                    id="ipt_regime_hora" 
                    type="radio" 
                    name="carga_horaria"
                    value="20h"
                    onChange={(e)=>setValueRegTrab(e.target.value)}/>
            </div>
            <div>
                <label 
                    htmlFor="ipt_regime_hora_2" className="lbl_options">40h: </label>
                <input className="ipt_options"
                    id="ipt_regime_hora_2" 
                    type="radio" 
                    name="carga_horaria"
                    value="40h"
                    onChange={(e)=>setValueRegTrab(e.target.value)}/>
                    
            </div>
            <div>
                <label
                    htmlFor="ipt_regime_hora_3" className="lbl_options">40h DE: </label>
                <input 
                    className="ipt_options"
                    id="ipt_regime_hora_3" 
                    type="radio" 
                    name="carga_horaria"
                    value="40h DE"
                    onChange={(e)=>setValueRegTrab(e.target.value)}/>
                    
            </div>
        </>
    )
}