import './styles.css';
import LOGO from './assets/logo-react.png';
import ICON from './assets/icon-watch.svg';
import { Counter } from './Counter';
import Teste from './components/Teste';

const App = () => {
  const name = {
    teste: "I'm",
  };

  const { teste } = name;

  console.log(teste);

  return (
    <div>
      <Teste />
      <img
        src={LOGO}
        alt="Logo"
        width={300}
        height={300}
      />
      <img
        src={ICON}
        alt="Icon"
      />
      <h1>
        Hello World!! {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <Counter />
    </div>
  );
};

export default App;
