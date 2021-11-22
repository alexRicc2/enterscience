import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { validacoes } from "./validacoes";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import styles from '../Form/styles.module.css';
import Finalizado from './Finalizado'

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const props = { FormData, validacoes, proximo, anterior}

  const formularios = [
    <DadosPessoais {...props} />,
    <DadosEntrega {...props} />,
    <DadosUsuario {...props} />,
    <Finalizado/>,
  ];

  
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  function anterior(){
    setEtapaAtual(etapaAtual - 1);
  }
  return (
    <>
      <Stepper activeStep={etapaAtual} className={styles.stepper} alternativeLabel>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
