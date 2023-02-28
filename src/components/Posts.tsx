import useFetch from '../hooks/useFetch';

const Posts = () => {
  const { data: posts, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    []
  );

  return (
    <div>
      {posts && posts.map(({ title, body }) => <div>{title}</div>)}
      {error && (
        <h2 className="text-orange-800">Sorry, there was an error: {error}</h2>
      )}
    </div>
  );
};

export default Posts;
