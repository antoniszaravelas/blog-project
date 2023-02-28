import useFetch from '../hooks/useFetch';
import { Heading1 } from '../typography/Headings';

const Posts = () => {
  const { data: posts, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    []
  );

  return (
    <>
      <div className="flex flex-wrap">
        {posts &&
          posts.map(({ title, body }) => (
            <div className="w-1/5 border mr-4 mb-4">
              <Heading1>{title}</Heading1>
              <p>{body}</p>
            </div>
          ))}
      </div>
      {error && (
        <h2 className="text-orange-800">Sorry, there was an error: {error}</h2>
      )}
    </>
  );
};

export default Posts;
