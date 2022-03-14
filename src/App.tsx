import { Features, Header } from './components';
import { GlobalContainer, GlobalStyle } from './styles';

function App() {
  return (
    <>
      <Header />
      <GlobalContainer as='main'>
        <Features />
        {/* Highlight */}
        {/* Testimonials */}
      </GlobalContainer>
      {/* Footer */}
      <GlobalStyle />
    </>
  );
}

export default App;
