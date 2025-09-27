"use client"
import { useEffect, useState } from "react"
import { materiaPorTurmas } from "./materiasPorPeriodo";



export default function IptTurmasAtt({turmas_select, setLista}){
    const [turmas, setTurmas]= useState()
    // const [turmas_select, setLista]:any = useState<string[]>([])
    const [materiaSelecionada, setMateriaSelecionada] = useState([])
    const [materias, setMaterias] = useState([])
    let turmas_list = [
    { value: "0", label:'MAM', disabled: true },
    { value: "1", label:'MAM-111' },
    { value: "2", label:'MAM-121' },
    { value: "3", label:'MAM-131' },
    { value: "4", label:'MAM-141' },
    { value: "5", label:'MAM-151' },
    { value: "6", label:'MAM-161' },
    { value: "7", label:'MAM-OPT' },
    { value: "8", label:'INF', disabled: true },
    { value: "9", label:'INF-211' },
    { value: "10", label:'INF-221' },
    { value: "11", label:'INF-231' },
    { value: "12", label:'INF-241' },
    { value: "13", label:'INF-251' },
    { value: "14", label:'INF-261' },
    { value: "15", label:'INF-OPT' },
    { value: "16", label:'TRC', disabled: true },
    { value: "17", label:'TRC-311' },
    { value: "18", label:'TRC-321' },
    { value: "19", label:'TRC-331' },
    { value: "20", label:'TRC-341' },
    { value: "21", label:'TRC-351' },
    { value: "22", label:'TRC-361' },
    { value: "23", label:'TRC-OPT' },
    { value: "24", label:'TGA', disabled: true },
    { value: "25", label:'TGA-311' },
    { value: "26", label:'TGA-321' },
    { value: "27", label:'TGA-331' },
    { value: "28", label:'TGA-341' },
    { value: "29", label:'TGA-351' },
    { value: "30", label:'TGA-OPT' },
]   
    const lista_materias = materiaPorTurmas
    const add_turmas = () => {
        if (turmas && materiaSelecionada.length> 0) {
        const novosItens = materiaSelecionada.map(m => `${turmas} - ${m}`).filter(item => !turmas_select.includes(item))
        setLista([...turmas_select, ...novosItens])
        setMateriaSelecionada([])
        setMaterias([]) 
        setTurmas("")
        }
    }

    useEffect(()=>{
        console.log(turmas_select)
    },[turmas_select])

    return(
        <>
            <label className="text-white text-[18px] w-[95%] mt-[4%]">Turmas - Após acordo com seus pares, especifique as diciplinas e turmas em que lecionará: 
            </label>
            <div>
                <select className="border-white border-1 rounded-[6px] text-black bg-white w-[20%] text-center cursor-pointer shadow-[2px_7px_15px_#245C10] mt-[2%] mb-[3%]"
                        value={turmas}
                        onChange={(e)=>{
                            const turma = e.target.value
                            setTurmas(turma)
                            setMaterias(lista_materias[turma] || [])
                            setMateriaSelecionada([])
                            }}>
                            <option value="" hidden></option>
                        {turmas_list.map((t)=>{
                                    return(
                                        <option
                                            className="hover:cursor-pointer"
                                            key={t.value}
                                            value={t.label}
                                            disabled={t.disabled || false}>
                                            {t.label}
                                        </option>
                                    )
                        })}
                </select>
                <button className="
                                cursor-pointer
                                border-1-white
                                px-2 
                                rounded-[6px] 
                                ml-3 
                                bg-white
                                hover:bg-[#428829] 
                                hover:border-1
                                hover:border-white
                                hover:text-white
                                transition-all duration-300
                                shadow-[2px_7px_15px_#245C10]"

                        onClick={add_turmas}>Adicionar</button>
                {materias.length > 0 && (
                <div className="mt-2 flex w-[95%] flex-wrap gap-[10%]">
                {materias.map((m) => (
                    <label key={m} className=" block w-[40%] mb-[3%] text-white hover:cursor-pointer">
                    <input
                        className="
                                    w-[15px]
                                    h-[15px]
                                    border-1
                                    border-white
                                    bg-white
                                    accent-[#428829]
                                    cursor-pointer
                                    mb-[2%]
                                    mr-[1%]"
                        type="checkbox"
                        value={m}
                        checked={materiaSelecionada.includes(m)}
                        onChange={(e) => {
                        if (e.target.checked) {
                            setMateriaSelecionada([...materiaSelecionada, m])
                        } else {
                            setMateriaSelecionada(materiaSelecionada.filter(mat => mat !== m))
                        }
                        }}
                    />
                    {m}
                    </label>
                ))}
                </div>
)}
            </div>
            <div>
                {/* ADICIONAR TURMAS SELECIONADAS NO MENU SUSPENSO NA TELA  */}
                <ul>
                        {turmas_select.map((l, index)=>(
                                <div key={index} className="flex flex-col w=[100%]">
                                    <li className="w-[90%] p-[5px] mr-[2px] flex items-center gap-[2%]">
                                        <span className="text-white">{l}</span>
                                        <button className="ml-[5px] cursor-pointer"
                                        onClick={()=>{
                                            /*REMOVER TURMA SOLICITADA*/ 
                                            let show_turmas = turmas_select.filter((_,i)=>i != index)
                                            setLista(show_turmas)
                                                }}>{<img src="/assets/trash.png" alt="Icone Lixeira" className="h-auto w-[23px] p-[5%]  ml-[5px] mr-[5px] bg-white rounded-[7px]"/>}</button></li>
                                </div>
                        ))}
                </ul>
            </div>
        </>
    )
}