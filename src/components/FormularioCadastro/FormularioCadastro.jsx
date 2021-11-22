import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { validacoes } from "./validacoes";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import { useForm, useStep } from 'react-hooks-helper';

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const defaultData = {
    nome: '',
    email: '',
    dataNascimento: '',
    cpf: '',
    sexo: '',
    telefone: '',
    senha1: '',
    senha2: ''
  }
  const [FormData, setForm] = useForm(defaultData);
  const props = { FormData, setForm, validacoes, proximo, anterior}

  const formularios = [
    <DadosPessoais {...props} />,
    <DadosUsuario {...props} />,
    <DadosEntrega {...props} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  function anterior(){
    setEtapaAtual(etapaAtual - 1);
  }
  return (
    <>
      <Stepper activeStep={etapaAtual} >
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
