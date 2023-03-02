import useFetch from '../hooks/useFetch';
import { Heading1, Paragraph } from '../typography/Headings';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorComponent from './ErrorComponent';

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

  const sortIt = (a: PostProps, b: PostProps) => {
    let textA = a.title.toUpperCase();
    let textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  };

  useEffect(() => {
    setPostsToRender(posts.slice(0, 5).sort(sortIt));
  }, [posts]);

  useEffect(() => {
    setPostsToRender(
      posts.slice((buttonNumber - 1) * 5, buttonNumber * 5).sort(sortIt)
    );
    console.log(buttonNumber);
  }, [buttonNumber]);

  const handleSearchBar = (term: string) => {
    setPostsToRender(
      posts.filter((post: any) => post.title.includes(term)).sort(sortIt)
    );
  };

  const buttonArray: any = [];

  return (
    <>
      <SearchBar onClick={handleSearchBar} />
      <div className="flex justify-center flex-wrap lg:flex-nowrap lg:px-60">
        <Button
          onClick={() =>
            setButtonNumber(
              buttonNumber === 1 ? buttonNumber : buttonNumber - 1
            )
          }
          className="rounded mr-3 px-2 py-1"
          text="previous"
        ></Button>
        {new Array(Math.ceil(posts.length / 5)).fill('0').map((_, index) => (
          <Button
            key={index}
            onClick={() => setButtonNumber(index + 1)}
            text={String(index + 1)}
            className="lg:w-1/2 py-1 w-10 mb-2 lg:mb-0 mr-3 rounded-xl"
          ></Button>
        ))}
        <Button
          onClick={() =>
            setButtonNumber(
              buttonNumber === Math.ceil(posts.length / 5)
                ? Math.ceil(posts.length / 5)
                : buttonNumber + 1
            )
          }
          className="rounded mr-3 px-2 py-1"
          text="next"
        ></Button>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {postsToRender &&
          postsToRender.map(({ title, body, id, userId }) => (
            <Card key={id}>
              <div
                className="flex flex-col justify-center "
                onClick={() => navigate(`/post/${id}/comments`)}
                id={id}
              >
                <Heading1>{title}</Heading1>
                <Paragraph>{body}</Paragraph>
              </div>

              <Paragraph className="hover:text-orange-500 italic">
                <div
                  className="mt-2"
                  onClick={() => navigate(`/user/${userId}`)}
                >
                  <Button
                    className="rounded p-2"
                    text={`  more from ${userId}`}
                  >
                    <FontAwesomeIcon size="lg" icon={faUser} />
                  </Button>
                </div>
              </Paragraph>
            </Card>
          ))}
      </div>
      {error && (
        <ErrorComponent>Sorry, there was an error! {error}</ErrorComponent>
      )}
    </>
  );
};

export default Posts;
