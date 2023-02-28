import { Title } from '../typography/Headings';
import Container from './Container';
import Posts from './Posts';

const Home = () => {
  return (
    <Container>
      <Title className="underline underline-offset-8">All Posts</Title>
      <Posts url={'https://jsonplaceholder.typicode.com/posts'} />
    </Container>
  );
};

export default Home;
