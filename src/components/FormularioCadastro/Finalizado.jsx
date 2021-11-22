import React from 'react';
import { useDados } from '../../hooks/Dados';
import confirmed from '../../assets/images/confirmed.svg'
import styles from '../Form/styles.module.css';
import axios from 'axios';
export default function Finalizado(){

  const {
    nome, email, dataNascimento, cpf, telefone, sexo,
    cep, cidade, estado, rua, numero, complemento,
    login, senha
  } = useDados();

  let formData = new FormData();
    formData.append("nome", nome);
    formData.append("nascimento", dataNascimento);
    formData.append("email", email);
    formData.append("telefone", telefone);
    formData.append("cpf", cpf);
    formData.append("sexo", sexo);
    formData.append("Cep", cep);
    formData.append("rua", rua);
    formData.append("numero", numero);
    formData.append("complemento", complemento);
    formData.append("cidade", cidade);
    formData.append("estado", estado);
    formData.append("login", login);
    formData.append("senha", senha);
    const url = "http://localhost:80/react-backend/" //Local
    //https://enterscience.herokuapp.com/  //Heroku
    axios.post(url, formData)
      .then(res=>console.log(res.data))
      .catch(err=> console.log(err));

  return(
    <div className={styles.form} id="form">
    <h2 className={styles.mensagem}>Obrigado <strong className={styles.strong}>{nome}</strong>, seu cadastro foi concluido!</h2>
    <img src={confirmed} />
    </div>
  )
}