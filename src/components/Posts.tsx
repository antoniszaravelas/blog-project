import useFetch from '../hooks/useFetch';
import { Heading1, Paragraph } from '../typography/Headings';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

interface PostsComponentProps {
  url: string;
}

interface PostProps {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const Posts: React.FC<PostsComponentProps> = ({ url }) => {
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

  const handleSearchBar = (term: string) => {
    setPostsToRender(posts.filter((post: any) => post.title.includes(term)));
  };

  return (
    <>
      <SearchBar onClick={handleSearchBar} />
      <div className="flex justify-center flex-wrap lg:flex-nowrap lg:px-60">
        {new Array(Math.ceil(posts.length / 5)).fill('0').map((_, index) => (
          <Button
            key={index}
            onClick={() => setButtonNumber(index + 1)}
            text={String(index + 1)}
            className="lg:w-1/2 py-1 w-10 mb-2 lg:mb-0 mr-3 rounded-xl"
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
