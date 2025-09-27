import { useState, useMemo, useEffect } from "react";


export default function IptDiasTurnoAtualizado({selecionados, setSelecionados}){
    const dias = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const turnos = [
        {label: "Manhã (07:30 às 12:00)", key: "Manha"},
        {label: "Tarde (13:00 às 18:30)", key: "Tarde"},
        {label: "Noite (18:00 às 22:10)", key: "Noite"},
    ];

    const handleCheckbox = (dia, turno, checked)=>{
        const chave = `${dia}|${turno}`;
        setSelecionados((prev) => ({
            ...prev,
            [chave]: checked,
        }));
    };
    const marcados = useMemo(
    () => Object.keys(selecionados).filter((k) => selecionados[k]),
    [selecionados]
    );

    useEffect(() => {
    console.log(marcados);
    }, [marcados]);

    return(
        <div>
            <h6 className="text-white text-[18px] mt-[4%] mb-[5%]">
                Todos os professoraes deverão assinalar <strong>4 opções de dias por turno</strong> em que leciona:
            </h6>
            <table className="
                                rounded-[32px] 
                                h-[35vh] 
                                w-[93%] 
                                bg-white 
                                overflow-hidden">
            <thead>
                <tr className="
                                w-[25%]
                                border-b-4
                                border-b-[#428829]">
                <th></th>
                    {turnos.map(turno => <th key={turno.key} className="text-black text-[13px] pl-[2%] pr-[2%] border-l-4 border-l-[#428829]">{turno.label}</th>)}
                </tr>
            </thead>

            <tbody>
                {dias.map(dia => (
                <tr key={dia} className="
                                h-[45px]
                                border-b-4
                                border-b-[#428829]
                                shadow-[inset_0_0_15px_#afafaf]">

                    <td className="
                                p-[1%] 
                                flex
                                flex-row
                                justify-around
                                ">{dia}</td>
                    {turnos.map(turno => (
                        <td key={turno.key} className="
                                border-l-4
                                border-l-[#428829]
                                w-[24%]
                                pl-[10%]">

                            <input
                            type="checkbox"
                            checked={!!selecionados[`${dia}|${turno.key}`]}
                            onChange={(e) => handleCheckbox(dia, turno.key, e.target.checked)}
                            className="scale-[125%]
                                accent-[#428829]
                                cursor-pointer"/>
                        </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>

        </div>
);

}