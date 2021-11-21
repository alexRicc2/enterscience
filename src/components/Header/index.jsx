import React from 'react';
import styles from './styles.module.css';
export function Header(){
  return(
    <header className={styles.header}>
      <h1>Logo</h1>
      <ul className={styles.navegacao}>
        <li><a href="#">Services</a></li>
        <li><a href="#">Cadastro</a></li>
      </ul>
    </header>
  )
}