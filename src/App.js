"use client";

import InputName from './componentes/iptTextName';
import { useState } from "react";
import IptRegimeTrab from "./componentes/iptRegimeTrab";
import IptObservacao from "./componentes/iptObservacoes";
import BtnEnviar from "./componentes/buttonEnviar";
import IptDiasTurnoAtualizado from "./componentes/iptDiasTunoAtualizado";
import IptTurmasAtt from "./componentes/iptTurmasAtualizado";

export default function App() {
    //VARIAVEIS GLOBAIS DOS COMPONENTES
  const [valueNome, setValueNome] = useState('')
  const [valueRegTrab, setValueRegTrab] = useState('')
  const [selecionados, setSelecionados] = useState({})
  const [turmas_select, setLista]= useState([])
  const [valueObs, setValueObs] = useState('')
  return (
      <>
      <link rel="icon" href="/assets/favicon-ifrj.ico" />

      <section id="header">

        <a id="logo_ifrj" href="https://www.ifrj.edu.br/" target="_blank">
          <img src="/assets/ifrj-logo.png" alt="logo IFRJ"/>
        </a>
        <div id="menu_header">

          <a href="https://www.facebook.com/ifrj.oficial" target="_blank">
            <img src="/assets/facebook.png" alt="Icone Linkedin"/>
          </a>

          <a href="https://www.instagram.com/ifrj.oficial" target="_blank">
            <img src="/assets/instagram.png" alt="Icone Linkedin"/>
          </a>

          <a href="https://www.linkedin.com/school/ifrjoficial/posts/?feedView=all" target="_blank">
            <img src="/assets/linkedin.png" alt="Icone Linkedin"/>
          </a>

          <a href="https://www.youtube.com/channel/UCYpGmXMywnhz8yNbQ__mUZg" target="_blank">
            <img src="/assets/youtube.png" alt="Icone Youtube"/>
          </a>
          
        </div>
      </section>
      <div id="body">
        <section id="section_form">


          <InputName value={valueNome} setValueNome={setValueNome}/>
          <IptRegimeTrab value={valueRegTrab} setValueRegTrab={setValueRegTrab} />
          <IptDiasTurnoAtualizado selecionados={selecionados} setSelecionados={setSelecionados} />
          <IptTurmasAtt turmas_select={turmas_select} setLista={setLista} />
          <IptObservacao value={valueObs} setValueObs={setValueObs} />
          <BtnEnviar valueNome={valueNome} valueRegTrab={valueRegTrab} valueMaterias={turmas_select} valueObs={valueObs} valueSelecionados={selecionados} />
        </section>

        <section id="section_img_body">
          <img src="/assets/bg-img.svg" alt=""/>
        </section>

      </div>

    </>
  );}
