import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const teste = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button onClick={teste}>Count - {count}</button>
    </div>
  );
};
