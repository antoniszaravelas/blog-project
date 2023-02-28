import useFetch from '../hooks/useFetch';
import { Heading1, Paragraph } from '../typography/Headings';
import { Navigate, useNavigate } from 'react-router-dom';
import Card from './Card';

interface PostsProps {
  url: string;
}

const Posts: React.FC<PostsProps> = ({ url }) => {
  const { data: posts, error } = useFetch(url, []);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {posts &&
          posts.map(({ title, body, id, userId }) => (
            <Card key={id}>
              <div
                className="flex flex-col justify-center"
                onClick={() => navigate(`/post/${id}/comments`)}
                id={id}
              >
                <Heading1 className="line-clamp-3">{title}</Heading1>
                <Paragraph className="line-clamp-5">{body}</Paragraph>
              </div>

              <Paragraph className="hover:text-orange-500 italic">
                <div onClick={() => navigate(`/user/${userId}`)}>
                  {' '}
                  more from user {userId}{' '}
                </div>
              </Paragraph>
            </Card>
          ))}
      </div>
      {error && (
        <div className="text-orange-800">
          Sorry, there was an error: {error}
        </div>
      )}
    </>
  );
};

export default Posts;
