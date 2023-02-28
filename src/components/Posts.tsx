import useFetch from '../hooks/useFetch';
import { Heading1, Paragraph } from '../typography/Headings';

const Posts = () => {
  const { data: posts, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    []
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    console.log(id);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {posts &&
          posts.map(({ title, body, id }) => (
            <div
              key={id}
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                handleClick(event, id)
              }
              className="flex flex-col w-1/3 border mr-4 mb-4 p-2 transition duration-300 ease-in-out bg-white hover:bg-black hover:text-white hover:cursor-pointer   hover:scale-110"
            >
              <Heading1 className="line-clamp-3">{title}</Heading1>
              <Paragraph className="line-clamp-6">{body}</Paragraph>
            </div>
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
