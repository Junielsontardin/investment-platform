import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const teste = () => {
    setCount((c) => c + 1);
  };

  const arrayNormal = ['1', '2', '3', '4', '5', '6', '7', '8'];
  arrayNormal.forEach((number) => {
    arrayNormal.forEach((string) => {
      arrayNormal.forEach((str) => {
        if (number === string && string === str) {
          console.log(number);
        }

        while (true) {
          console.log('ALALA');
        }
      });
    });
  });

  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button onClick={teste}>Count - {count}</button>
    </div>
  );
};
