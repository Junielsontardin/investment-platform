import React from 'react';
import styles from './styles.module.scss';

const arrayNormal = ['1', '2', '3', '4', '5', '6', '7', '8'];

const Teste = () => {
  arrayNormal.forEach((number) => {
    arrayNormal.forEach((string) => {
      arrayNormal.forEach((str) => {
        if (number === string && string === str) {
          console.log(number);
        }
      });
    });
  });

  return (
    <div className={styles.teste}>
      <select>
        <option value="5" />
      </select>
      LALALAA
      <div>QUERO VER Novamente</div>
      LALALAA testes
    </div>
  );
};

export default Teste;
