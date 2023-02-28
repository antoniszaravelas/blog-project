import { Title } from '../typography/Headings';
import Posts from './Posts';

const Home = () => {
  return (
    <>
      <Title className="underline underline-offset-8">All Posts</Title>
      <Posts url={'https://jsonplaceholder.typicode.com/posts'} />
    </>
  );
};

export default Home;
