import useFetch from '../hooks/useFetch';
import { Heading1, Paragraph } from '../typography/Headings';
import { Navigate, useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import { useEffect, useState } from 'react';

interface PostsProps {
  url: string;
}

const Posts: React.FC<PostsProps> = ({ url }) => {
  const { data: posts, error } = useFetch(url, []);
  const [buttonNumber, setButtonNumber] = useState(1);
  const [postsToRender, setPostsToRender] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPostsToRender(posts.slice(0, 5));
  }, [posts]);

  useEffect(() => {
    setPostsToRender(posts.slice((buttonNumber - 1) * 5, buttonNumber * 5));
  }, [buttonNumber]);

  console.log(postsToRender);

  return (
    <>
      <div className="flex justify-center px-60">
        {new Array(Math.ceil(posts.length / 5)).fill('0').map((_, index) => (
          <Button
            key={index}
            onClick={() => setButtonNumber(index + 1)}
            text={String(index + 1)}
          ></Button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {postsToRender &&
          postsToRender.map(({ title, body, id, userId }) => (
            <Card key={id}>
              <div
                className="flex flex-col justify-center"
                onClick={() => navigate(`/post/${id}/comments`)}
                id={id}
              >
                <Heading1>{title}</Heading1>
                <Paragraph>{body}</Paragraph>
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
