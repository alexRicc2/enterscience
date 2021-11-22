import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import styles from '../Form/styles.module.css';
import useCep from "react-hook-usecep";
import { useDados } from "../../hooks/Dados";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function DadosEntrega({ validacoes, proximo, anterior }) {

  const [status, setCepApi] = useCep();

  const {
    cidade, setCidade,
    rua, setRua,
    cep, setCep,
    numero, setNumero,
    estado, setEstado,
    complemento, setComplemento
  } = useDados();

  useEffect(() => {
    if(status.data.localidade){
      setCidade(status.data?.localidade)
      setRua(status.data?.logradouro)
      setComplemento(status.data?.complemento)
      setEstado(status.data?.uf)
    }
  }, [status]);

  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido)return false
    }
    return true
  }
  const [erros, setErros] = useState(
    {
      cep: { valido: true, texto: "" },
      rua: { valido: true, texto: "" },
      cidade: { valido: true, texto: "" },
      numero: { valido: true, texto: "" }
  })

  return (
    <>
    <form className={styles.form}
      autoComplete="false" onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar())
        proximo();
      } }
    >
      <ArrowBackIcon onClick={anterior}>Voltar</ArrowBackIcon>
      <TextField
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        } }
        id="cep"
        name="cep"
        label="CEP"
        type="text"
        variant="outlined"
        margin="normal"
        onBlur={(e) => {
          setCepApi(e.target.value);
        } } />
      <TextField
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value);
        } }
        id="cidade"
        name="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth />
      <TextField
        value={estado}
        onChange={(e) => {
          setEstado(e.target.value);
        } }
        id="estado"
        name="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal" />
      <TextField
        value={rua}
        onChange={(e) => {
          setRua(e.target.value);
        } }
        id="rua"
        name="rua"
        label="Rua"
        type="text"
        variant="outlined"
        margin="normal" />
      <TextField
        value={numero}
        onChange={(e) => {
          setNumero(e.target.value);
        } }
        id="numero"
        name="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal" />
      <TextField
        value={complemento}
        onChange={(e) => {
          setComplemento(e.target.value);
        } }
        id="complemento"
        name="complemento"
        label="Complmento"
        type="text"
        variant="outlined"
        margin="normal" />
      <button type="submit" className={styles.button}>
        Proximo
      </button>
    </form></>
  );
}

export default DadosEntrega;
