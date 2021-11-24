import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo2.png'
export function Header(){
  return(
    <header className={styles.header}>
      <img src={logo} className={styles.logo}/>
      <ul className={styles.navegacao}>
        <li><Link to="services" smooth={true} className={styles.link}>Services</Link></li>
        <li><Link to="form" smooth={true} className={styles.link}>Cadastro</Link></li>
      </ul>
    </header>
  )
}