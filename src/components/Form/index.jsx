import React, { useEffect, useState } from 'react';
import useCep from 'react-hook-usecep';

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
  console.log('status: ',status)
  return(
    <form action="">
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" required
        value={nome}
        onChange={(e)=>setNome(e.target.value)}
      />

      <label htmlFor="data">Data de nascimento: </label>
      <input type="date" id="data"
        value={nascimento}
        onChange={(e)=>setNascimento(e.target.value)}
      />
      
      <h2>Endereço</h2>
      <label htmlFor="CEP">CEP:</label>
      <input 
        type="text" id="CEP"
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

      <label htmlFor="Rua">Rua: </label>
      <input type="text" id="Rua" required 
      value={rua}
      onChange={(e)=>setRua(e.target.value)}
      />

      <label htmlFor="Numero">Número: </label>
      <input type="number" id="Numero" required
        value={numero}
        onChange={(e)=>setNumero(e.target.value)}
      />

      <label htmlFor="Complemento">Complemento</label>
      <input type="text" id="Complemento" required
        value={complemento}
        onChange={(e)=>setComplemento(e.target.value)}
      />
      
      <label htmlFor="Bairro">Cidade:</label>
      <input type="text" id="Cidade" required 
      value={cidade}
      onChange={(e)=> setCidade(e.target.value)}
      />
      <label htmlFor="estado">Estado: </label>
      <input type="text" id="estado" required
        value={estado}
        onChange={(e)=>setEstado(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input type="email"id="email" required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <label htmlFor="number">Telefone de contato: </label>
      <input type="number" id="telefone"
        value={telefone}
        onChange={(e)=>setTelefone(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  )
}