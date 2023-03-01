import { Title } from '../typography/Headings';
import Container from './Container';
import Posts from './Posts';

const Home = () => {
  return (
    <Container>
      <Title>All Posts</Title>
      <Posts url={'https://jsonplaceholder.typicode.com/posts'} />
      <div id="modal"></div>
    </Container>
  );
};

export default Home;
