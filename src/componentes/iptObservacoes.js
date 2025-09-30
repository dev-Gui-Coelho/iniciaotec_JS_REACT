
export default function IptObservacao({value, setValueObs}){
    return(
        <>
            <label id="lbl_obs">Observações:</label>
            {/* TEXT AREA PARA SER EDITAVEL O TAMANHO EXIBIDO */}
            <textarea
                className="border-1 border-white w-[95%] bg-white rounded-[15px] p-[2%] focus:outline-[#428829] shadow-[2px_7px_15px_#245C10] caret-[#428829]"
                value={value}
                rows={4}
                cols={40}
                
                onChange={(e)=>setValueObs(e.target.value)}
                style={{ resize: 'both', overflow: 'auto', width: '90%',minHeight: '70px', minWidth: '35%', maxHeight:'250px', maxWidth:'95%'}}>
                
            </textarea>
        </>
    )
}