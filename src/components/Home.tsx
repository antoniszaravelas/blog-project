import { Title } from '../typography/Headings';
import Button from './Button';
import Container from './Container';
import Posts from './Posts';

const Home = () => {
  return (
    <Container>
      <Title>All Posts</Title>
      <Posts url={'https://jsonplaceholder.typicode.com/posts'} />
    </Container>
  );
};

export default Home;
