import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-scroll'
export function Header(){
  return(
    <header className={styles.header}>
      <h1>Logo</h1>
      <ul className={styles.navegacao}>
        <li><Link to="services" smooth={true}>Services</Link></li>
        <li><Link to="form" smooth={true}>Cadastro</Link></li>
      </ul>
    </header>
  )
}