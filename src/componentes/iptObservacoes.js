
export default function IptObservacao({value, setValueObs}){
    return(
        <>
            <label id="lbl_obs">Observações:</label>
            {/* TEXT AREA PARA SER EDITAVEL O TAMANHO EXIBIDO */}
            <textarea
                value={value}
                rows={4}
                cols={40}
                
                onChange={(e)=>setValueObs(e.target.value)}
                style={{ resize: 'vertical', overflow: 'auto', width: '90%',minHeight: '70px', minWidth: '35%', maxHeight:'250px', maxWidth:'95%'}}>
                
            </textarea>
        </>
    )
}