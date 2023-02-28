import { Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Home from './components/Home';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
