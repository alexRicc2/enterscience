import React from 'react';
import styles from './styles.module.css';

export function Hero(){
  return(
    <section className={styles.hero}>
      <div className={styles.textoContainer}>
        <h2 className={styles.subtitle}>Tecnologia de ponta</h2>
        <h1 className={styles.title}>Big Sale</h1>
        <p className={styles.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit laborum impedit ducimus praesentium! Ipsam rem rerum velit</p>
        <a className={styles.botao}>Criar cadastro</a>
      </div>
      
    </section>
  )
}