import React from 'react';
import BuildIcon from '@material-ui/icons/Build';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LockIcon from '@material-ui/icons/Lock';


import styles from './styles.module.css';

export function Services (){
  return(
    <section>
      <h2 className={styles.title}>Nossos servicos</h2>
      <ul className={styles.listaServicos}>
        <li className={styles.item}>
          <BuildIcon/>
          <h3 className={styles.itemTitle}>Repararo</h3>
          <p className={styles.itemText}>Na nossa compania voce repara seu smartphone sem preocupações</p>
        </li>
        <li className={styles.item}>
          <LoyaltyIcon/>
          <h3 className={styles.itemTitle}>Melhor mercado tecnológico</h3>
          <p className={styles.itemText}>Na nossa compania voce repara seu smartphone sem preocupações</p>
        </li>
        <li className={styles.item}>
          <SportsEsportsIcon/>
          <h3 className={styles.itemTitle}>Play games</h3>
          <p className={styles.itemText}>Voce pode se divertir na nossa área de jogos</p>
        </li>
        <li className={styles.item}>
          <LockIcon/>
          <h3 className={styles.itemTitle}>Segurança</h3>
          <p className={styles.itemText}>Na nossa compania voce repara seu smartphone sem preocupações</p>
        </li>
        <li className={styles.item}>
          <BuildIcon/>
          <h3 className={styles.itemTitle}>Repararo</h3>
          <p className={styles.itemText}>Na nossa compania voce repara seu smartphone sem preocupações</p>
        </li>
        <li className={styles.item}>
          <BuildIcon/>
          <h3 className={styles.itemTitle}>Repararo</h3>
          <p className={styles.itemText}>Na nossa compania voce repara seu smartphone sem preocupações</p>
        </li>
      </ul>
    </section>
  )
}