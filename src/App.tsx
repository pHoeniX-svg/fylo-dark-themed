import { useState } from 'react';
import { Header } from './components';
import { GlobalStyle } from './styles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>HEllo</h1>
      <Header />
      <GlobalStyle />
    </>
  );
}

export default App;
