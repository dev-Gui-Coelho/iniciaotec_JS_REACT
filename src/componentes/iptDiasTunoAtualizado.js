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

    // useEffect(() => {
    // console.log(marcados);
    // }, [marcados]);

    return(
        <div>
            <h6 id="lbl_dias_turnos">
                Todos os professoraes deverão assinalar <strong>4 opções de dias por turno</strong> em que leciona:
            </h6>
            <table >
            <thead>
                <tr id="linha_1">
                <th id="empty_cell"></th>
                    {turnos.map(turno => <th id="turnos" key={turno.key}>{turno.label}</th>)}
                </tr>
            </thead>

            <tbody>
                {dias.map(dia => (
                <tr key={dia}>
                    <td className="dias_semana">{dia}</td>
                    {turnos.map(turno => (
                        <td key={turno.key} className="ipt_celulas">
                            <input
                            type="checkbox"
                            checked={!!selecionados[`${dia}|${turno.key}`]}
                            onChange={(e) => handleCheckbox(dia, turno.key, e.target.checked)}
                            id="ipt_turno_dia"/>
                        </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>

        </div>
);

}