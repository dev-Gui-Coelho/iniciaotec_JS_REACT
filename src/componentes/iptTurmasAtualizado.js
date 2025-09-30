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
            <label id="lbl_select_turmas">Turmas - Após acordo com seus pares, especifique as diciplinas e turmas em que lecionará: 
            </label>
            <div>
                <select
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
                                            key={t.value}
                                            value={t.label}
                                            disabled={t.disabled || false}>
                                            {t.label}
                                        </option>
                                    )
                        })}
                </select>
                <button id="btn_add"
                        onClick={add_turmas}>Adicionar</button>
                {materias.length > 0 && (
                <div id="materias_turma_select">
                {materias.map((m) => (
                    <label id="lbl_materia" key={m}>
                    <input id="ipt_materias"
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
                                <div id="card_turmas_selecionadas" key={index}>
                                    <li id="lista_turmas_selecionadas">
                                        <span>{l}</span>
                                        <button id="btn_excluir"
                                        onClick={()=>{
                                            /*REMOVER TURMA SOLICITADA*/ 
                                            let show_turmas = turmas_select.filter((_,i)=>i != index)
                                            setLista(show_turmas)
                                                }}>{<img src="/assets/trash.png" alt="Icone Lixeira" id="trash_img"/>}</button></li>
                                </div>
                        ))}
                </ul>
            </div>
        </>
    )
}