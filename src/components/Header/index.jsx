import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo2.png'
export function Header(){
  return(
    <header className={styles.header}>
      <img src={logo} className={styles.logo}/>
      <ul className={styles.navegacao}>
        <li><Link to="services" smooth={true}>Services</Link></li>
        <li><Link to="form" smooth={true}>Cadastro</Link></li>
      </ul>
    </header>
  )
}