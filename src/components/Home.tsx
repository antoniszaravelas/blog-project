import { Title } from '../typography/Headings';
import Container from './Container';
import Posts from './Posts';

const Home = () => {
  return (
    <Container>
      <input type="text" placeholder="search article" />
      <Title>All Posts</Title>
      <Posts url={'https://jsonplaceholder.typicode.com/posts'} />
    </Container>
  );
};

export default Home;
