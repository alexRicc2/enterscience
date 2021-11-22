import React, { createContext , useContext, useState} from 'react';

export const DadosContext = createContext({})

function DadosProvider({children}){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo]= useState('Masculino');
  const [cep, setCep]= useState('')
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return(
    <DadosContext.Provider value={{
      nome, setNome,
      email, setEmail,
      cpf, setCpf,
      telefone, setTelefone,
      dataNascimento, setDataNascimento,
      sexo, setSexo,
      cep, setCep,
      rua, setRua,
      numero, setNumero,
      complemento, setComplemento,
      cidade, setCidade,
      estado, setEstado,
      login, setLogin,
      senha, setSenha,
    }}>
    {children}
    </DadosContext.Provider>
  )
}
function useDados(){
  const context = useContext(DadosContext)
  return context
}


export { DadosProvider, useDados }