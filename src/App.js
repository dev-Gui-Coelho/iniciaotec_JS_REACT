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

      <section id="header" className="
                  w-[100vw]
                  h-[15vh]
                  flex
                  justify-between
                  ">

        <a id="logo_ifrj" href="https://www.ifrj.edu.br/" target="_blank" className="
                  ml-[5%]
                  flex
                  items-center">
          <img src="/assets/ifrj-logo.png" alt="logo IFRJ"/>
        </a>
        <div id="menu_header" className="
                  w-[25%]
                  flex
                  flex-row
                  items-center
                  gap-[5%]
                  pl-[5%]">

          <a href="https://www.facebook.com/ifrj.oficial" target="_blank">
            <img src="/assets/facebook.png" alt="Icone Linkedin" className="w-[30px] h-auto"/>
          </a>

          <a href="https://www.instagram.com/ifrj.oficial" target="_blank">
            <img src="/assets/instagram.png" alt="Icone Linkedin" className="w-[30px] h-auto"/>
          </a>

          <a href="https://www.linkedin.com/school/ifrjoficial/posts/?feedView=all" target="_blank">
            <img src="/assets/linkedin.png" alt="Icone Linkedin" className="w-[30px] h-auto"/>
          </a>

          <a href="https://www.youtube.com/channel/UCYpGmXMywnhz8yNbQ__mUZg" target="_blank">
            <img src="/assets/youtube.png" alt="Icone Youtube" className="w-[30px] h-auto"/>
          </a>
          
        </div>
      </section>
      <div id="body" className="flex
      flex-row">
        <section id="section_form" className="
                  flex
                  flex-col
                  xl:w-[45vw]
                  sm:w-[75vw]
                  h-auto
                  bg-[#428829]
                  rounded-[46px]
                  ml-[70px]
                  mt-[20px]
                  shadow-[2px_7px_15px_#777777]
                  pl-[3%]
                  pt-[4%]
                  pb-[4%]">


          <InputName value={valueNome} setValueNome={setValueNome}/>
          <IptRegimeTrab value={valueRegTrab} setValueRegTrab={setValueRegTrab} />
          <IptDiasTurnoAtualizado selecionados={selecionados} setSelecionados={setSelecionados} />
          <IptTurmasAtt turmas_select={turmas_select} setLista={setLista} />
          <IptObservacao value={valueObs} setValueObs={setValueObs} />
          <BtnEnviar valueNome={valueNome} valueRegTrab={valueRegTrab} valueMaterias={turmas_select} valueObs={valueObs} valueSelecionados={selecionados} />
        </section>

        <section id="section_img_body" className="
                w-[45%]
                flex
                items-center
                justify-center">
          <img src="/assets/bg-img.svg" alt="" className="h-[38vh] backdrop-opacity-55"/>
        </section>

      </div>

    </>
  );}
