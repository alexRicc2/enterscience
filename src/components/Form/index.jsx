import React, { useEffect, useState } from 'react';
import useCep from 'react-hook-usecep';
import styles from './styles.module.css';
import axios from 'axios';
export function Form(){

  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [status, setCepApi] = useCep()
  
  useEffect(()=>{
    if(status.data.localidade){

      setCidade(status.data?.localidade)
      setRua(status.data?.logradouro)
      setComplemento(status.data?.complemento)
      setEstado(status.data?.uf)
    }
  },[status])
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(text)
    let formData = new FormData();
    formData.append("nome", nome);
    formData.append("nascimento", nascimento);
    formData.append("email", email);
    formData.append("telefone", telefone);
    formData.append("Cep", cep);
    formData.append("rua", rua);
    formData.append("numero", numero);
    formData.append("complemento", complemento);
    formData.append("cidade", cidade);
    formData.append("estado", estado);
    const url = "http://localhost:80/react-backend/"
    console.log(formData);
    axios.post(url, formData)
      .then(res=>console.log(res.data))
      .catch(err=> console.log(err));
  }

  return(
    <>
    <h2 className={styles.title}>Cadastre-se</h2>
    <form className={styles.form}>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" className={styles.input}
        value={nome}
        onChange={(e)=>setNome(e.target.value)}
        required
      />

      <label htmlFor="data">Data de nascimento</label>
      <input type="date" id="data" className={styles.input}
        value={nascimento}
        onChange={(e)=>setNascimento(e.target.value)}
      />
      <div className={styles.inputContainer}>
        <div>
      <label htmlFor="email">Email</label>
      <input type="email"id="email" required className={styles.input}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
  </div>
  <div>
      <label htmlFor="number">Telefone de contato</label>
      <input type="number" id="telefone" className={styles.input}
        value={telefone}
        onChange={(e)=>setTelefone(e.target.value)}
      />
      </div>
      </div>
      <h2>Endereço</h2>
      <label htmlFor="CEP">CEP</label>
      <input 
        type="text" id="CEP" className={styles.input}
        value={cep}
        onChange={(e)=> {
          setCep(e.target.value)
        }}
        onBlur={(e)=>{
          setCep(e.target.value)
          setCepApi(e.target.value)
          
        }}
        required
      />

      <label htmlFor="Rua">Rua</label>
      <input type="text" id="Rua" required 
      value={rua} className={styles.input}
      onChange={(e)=>setRua(e.target.value)}
      />

      <label htmlFor="Numero">Número</label>
      <input type="number" id="Numero" required className={styles.input}
        value={numero}
        onChange={(e)=>setNumero(e.target.value)}
      />

      <label htmlFor="Complemento">Complemento</label>
      <input type="text" id="Complemento" required className={styles.input}
        value={complemento}
        onChange={(e)=>setComplemento(e.target.value)}
      />
      
      <label htmlFor="Bairro">Cidade</label>
      <input type="text" id="Cidade" required  className={styles.input}
      value={cidade}
      onChange={(e)=> setCidade(e.target.value)}
      />
      <label htmlFor="estado">Estado</label>
      <input type="text" id="estado" required className={styles.input}
        value={estado}
        onChange={(e)=>setEstado(e.target.value)}
      />
      
      <button id="submit" type="submit" onClick={handleSubmit}>Enviar</button>
    </form>
        </>
  )
}