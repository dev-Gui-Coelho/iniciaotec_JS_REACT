export default function BtnEnviar({valueNome, valueRegTrab ,valueObs, valueSelecionados, valueMaterias}){
    const checksSelect = Object.keys(valueSelecionados)
    return(
        <>
            <button 
            id="btn_enviar"
            type="submit" 
            className="w-[100px] cursor-pointer px-[4px] rounded-sm mt-3  bg-white hover:bg-[#428829] 
                                hover:border-1
                                hover:border-white
                                hover:text-white
                                transition-all duration-300
                                shadow-[2px_7px_15px_#245C10]"
            onClick={()=>{
                //PEGA O VALOR DOS INPUTs (Nome, RegimeTrab, Observação)  E ARMAZENA
                let dados = [
                    {valueNome},
                    {valueRegTrab},
                    {checksSelect},
                    {valueMaterias},
                    {valueObs},
                ]
                console.log(dados)
            }}>Enviar</button>
            
        </>
    )
}