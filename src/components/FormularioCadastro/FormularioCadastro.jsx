import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEndereco from "./DadosEndereco";
import { validacoes } from "./validacoes";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import styles from '../Form/styles.module.css';
import Finalizado from './Finalizado'

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const props = { FormData, validacoes, proximo, anterior}

  const formularios = [
    <DadosPessoais {...props} />,
    <DadosEndereco {...props} />,
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
    <section className={styles.sectionForm}>
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
    </section>
  );
}

export default FormularioCadastro;
