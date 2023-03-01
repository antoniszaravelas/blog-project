import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Title } from '../typography/Headings';
import Container from './Container';

interface CommentsProps {
  url: string;
}

const Comments: React.FC<CommentsProps> = ({ url }) => {
  let { id } = useParams();
  const { data: comments, error } = useFetch(url, []);

  const postComments = comments
    .filter((comment) => comment['postId'] === Number(id))
    .map((comment) => ({ name: comment['name'], body: comment['body'] }));

  console.log(postComments);
  return (
    <Container>
      <Title>Comments</Title>
      <div className="flex flex-wrap border">
        {postComments &&
          postComments.map((comment) => (
            <div key={comment.name}>
              <div className="text-white p-2 w-1/2">{comment.name}</div>
              <div className="text-white p-2 w-1/2">{comment.body}</div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Comments;
