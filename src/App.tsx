import Container from './components/Container';
import Posts from './components/Posts';
import { Title } from './typography/Headings';

function App() {
  return (
    <Container>
      <Title className="underline underline-offset-8">All Posts</Title>
      <Posts />
    </Container>
  );
}

export default App;
