import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useDados} from '../../hooks/Dados';
import styles from '../Form/styles.module.css';
function DadosUsuario({ proximo, anterior }) {
  
  const {
    login, setLogin,
    senha, setSenha
  } = useDados();

  const [erros, setErros] = useState(
    {
      login: { valido: true, texto: "" },
      senha: { valido: true, texto: "" },
    }) 

  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido)return false
    }
    return true
  }

  return (
    <>
    <form className={styles.form} id="form"
      autoComplete="false" onSubmit={(event) => {
        event.preventDefault()
        if(possoEnviar())proximo()
      }}
    >
      <ArrowBackIcon onClick={anterior}>Voltar</ArrowBackIcon>
      <TextField
        value={login}
        onChange={(event) => {
          setLogin(event.target.value);
        } }
        id="login"
        name="login"
        label="Login"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        } }
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth />
      <button type="submit" className={styles.button}>
        Finaliza Cadastro
      </button>
    </form></>
  );
}

export default DadosUsuario;
