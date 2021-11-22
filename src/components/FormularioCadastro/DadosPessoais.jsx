import React, { useState } from "react";
import { TextField} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import styles from '../Form/styles.module.css'
function DadosPessoais({ FormData, setForm, validacoes, proximo }) {

  const { nome , email, cpf, telefone, dataNascimento, sexo } = FormData;
  
  const opcoes = [
    {
      value: "Masculino"
    },
    {
      value: "Feminino"
    },
    {
      value: "Não identificado"
    }
  ]
  const [sexo2, setSexo2] = useState('Masculino')
  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido)return false
    }
    return true
  }
  const [erros, setErros] = useState(
    {
      nome: { valido: true, texto: "" },
      email: { valido: true, texto: "" },
      cpf: { valido: true, texto: "" },
      telefone: { valido: true, texto: "" }
    }) 
  
    const handleChange = (e) => {
    setSexo2(e.target.value);
    sexo = e.target.value
  }
  
  return (
    <form className={styles.form}
    autoComplete="false" onSubmit={(event) => {
      event.preventDefault()
      if(possoEnviar())proximo()
    }}
    >
       <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={setForm}
          required
          margin="normal"
          error={!erros.email.valido}
          helperText={erros.email.texto}
          onBlur={() => {
            const ehValido = validacoes.validaEmail(email)
            setErros(erros => ({
              ...erros, email: ehValido
            }))
          }} />
        <TextField
          type="text"
          id="outlined-basic"
          label="Nome Completo"
          variant="outlined"
          name="nome"
          value={nome}
          onChange={setForm}
          required
          margin="normal"
          error={!erros.nome.valido}
          helperText={erros.nome.texto}
          onBlur={() => {
            const ehValido = validacoes.validaNome(nome)
            setErros(erros => ({
              ...erros, nome: ehValido
            }))
          }} />
           <TextField
          type="date"
          id="outlined-basic"
          variant="outlined"
          name="dataNascimento"
          value={dataNascimento}
          onChange={setForm}
          required
          margin="normal"
           />
        <TextField
          type="text"
          id="outlined-basic"
          label="CPF"
          variant="outlined"
          name="cpf"
          value={cpf}
          onChange={setForm}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          required
          margin="normal"
          onBlur={() => {
            const ehValido = validacoes.validaCpf(cpf)
            setErros(erros => ({
              ...erros, cpf: ehValido
            }))
          }} />
        <TextField
          type="text"
          id="outlined-basic"
          label="Telefone de contato"
          variant="outlined"
          name="telefone"
          value={telefone}
          onChange={setForm}
          required
          margin="normal"
          helperText={erros.telefone.texto}
          error={!erros.telefone.valido}
          onBlur={() => {
            const ehValido = validacoes.validaTell(telefone)
            setErros(erros => ({
              ...erros, cell: ehValido
            }))
          }} />

        <TextField
          id="standard-select-currency"
          select
          label="sexo"
          value={sexo2}
          onChange={handleChange}
          helperText="Por favor selecione o seu sexo"
          variant="outlined"
          margin="normal"
        >
          {opcoes.map((opcao) => (
            <MenuItem key={opcao.value} value={opcao.value}>
              {opcao.value}
            </MenuItem>
          ))}
        </TextField>

      <button type="submit" className={styles.button}>
        Próximo
      </button>
    </form>
  );
}

export default DadosPessoais;
