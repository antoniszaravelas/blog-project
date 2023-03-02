import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Heading1, Paragraph, Title } from '../typography/Headings';
import Card from './Card';
import Container from './Container';
import ErrorComponent from './ErrorComponent';

interface CommentsProps {
  url: string;
}

const Comments: React.FC<CommentsProps> = ({ url }) => {
  let { id } = useParams();
  const { data: comments, error: errorComments } = useFetch(url, []);

  const postComments = comments
    .filter((comment) => comment['postId'] === Number(id))
    .map((comment) => ({ name: comment['name'], body: comment['body'] }));

  return (
    <Container>
      <Title>Comments</Title>
      <div className="flex flex-col items-center">
        {postComments &&
          postComments.map((comment) => (
            <Card
              className="transition duration-300 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer   hover:scale-110
            "
              key={comment.name}
            >
              {' '}
              <div className="flex flex-col justify-center">
                <Heading1>{comment.name}</Heading1>
                <Paragraph>{comment.body}</Paragraph>
              </div>
            </Card>
          ))}
      </div>

      {errorComments && (
        <ErrorComponent>
          There was an error rendering the comments! {errorComments}
        </ErrorComponent>
      )}
    </Container>
  );
};

export default Comments;
