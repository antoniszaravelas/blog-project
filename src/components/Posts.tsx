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
  const [buttonArray, setButtonArray] = useState<(string | number)[]>();
  const navigate = useNavigate();

  const sortIt = (a: PostProps, b: PostProps) => {
    let textA = a.title.toUpperCase();
    let textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  };

  useEffect(() => {
    setPostsToRender(posts.slice(0, 5).sort(sortIt));

    setButtonArray(['1', '2', '...', posts.length / 5 - 1, posts.length / 5]);
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

  const previousOrNext = (arg: 'previous' | 'next') => {
    if (
      buttonArray &&
      (buttonArray[0] !== '1' ||
        buttonArray[buttonArray.length] !== posts.length / 5)
    ) {
      const newButtonArray = buttonArray.map((x, index) => {
        if (arg === 'next') {
          if (
            index < buttonArray.indexOf('...') &&
            Number(x) < Number(buttonArray[buttonArray.length - 1]) - 2 &&
            buttonArray[index + 1] !==
              Number(buttonArray[buttonArray.length - 1]) - 2
          ) {
            return Number(x) + 1;
          }
        } else {
          if (
            index < buttonArray.indexOf('...') &&
            Number(x) > 1 &&
            Number(buttonArray[0]) !== 1
          ) {
            return Number(x) - 1;
          }
        }
        return x;
      });
      console.log(newButtonArray);
      setButtonArray(newButtonArray);
    }
  };

  return (
    <>
      <SearchBar onClick={handleSearchBar} />
      <div className="flex justify-center  lg:flex-nowrap lg:w-1/2 mx-auto">
        <Button
          onClick={() => {
            previousOrNext('previous');
            if (buttonArray) setButtonNumber(Number(buttonArray[0]));
          }}
          className="lg:w-1/2 py-1 px-1 w-18 mb-2 lg:mb-0 mr-3 rounded-sm"
          text="previous"
        ></Button>

        {buttonArray &&
          buttonArray.map((button: string | number) => (
            <Button
              className={`lg:w-1/2 py-1 w-10 mb-2 lg:mb-0 mr-3 rounded-xl ${
                buttonNumber === Number(button) ? 'bg-green-300' : ''
              }`}
              text={String(button)}
              onClick={() => {
                if (button === '...') {
                  previousOrNext('next');
                }
                setButtonNumber(
                  button === '...'
                    ? Number(buttonArray[buttonArray.indexOf('...') - 1])
                    : Number(button)
                );
              }}
            ></Button>
          ))}
        <Button
          onClick={() => {
            previousOrNext('next');
            setButtonNumber(
              buttonNumber === Math.ceil(posts.length / 5)
                ? Math.ceil(posts.length / 5)
                : buttonNumber + 1
            );
          }}
          className="lg:w-1/2 py-1 px-1 w-24 mb-2 lg:mb-0  rounded-sm"
          text="next"
        ></Button>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {postsToRender &&
          postsToRender.map(({ title, body, id, userId }) => (
            <Card
              className="transition duration-300 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer   hover:scale-110
            "
              key={id}
            >
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
