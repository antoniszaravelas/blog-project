import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Card from './Card';
import Container from './Container';

interface CommentsProps {
  url: string;
}

const Comments: React.FC<CommentsProps> = ({ url }) => {
  let { id } = useParams();
  const { data: comments, error } = useFetch(url, []);

  const postComments = comments
    .filter((comment) => comment['postId'] === Number(id))
    .map((comment) => comment['name']);

  console.log(postComments);
  return (
    <Container>
      {postComments.map((comment) => (
        <Card>{comment}</Card>
      ))}
    </Container>
  );
};

export default Comments;
