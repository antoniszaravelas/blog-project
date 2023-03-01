import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Heading1, Title, Paragraph } from '../typography/Headings';
import Card from './Card';
import Container from './Container';
import { useNavigate } from 'react-router-dom';

interface UserProps {
  url: string;
}

interface TodosProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const User: React.FC<UserProps> = ({ url }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data: users, error } = useFetch(`${url}`, []);
  const { data: posts, error: postsError } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    []
  );
  const {
    data: todos,
    error: todosError,
  }: { data: TodosProps[]; error: string } = useFetch(
    'https://jsonplaceholder.typicode.com/todos',
    []
  );

  const [fetchedUser]: any = users.filter((x) => x['id'] === Number(id));

  console.log(fetchedUser);
  return (
    <Container>
      <Title>Information</Title>
      {fetchedUser && (
        <ul className="text-white">
          <li>Name: {fetchedUser.name}</li>
          <li>Username: {fetchedUser.username}</li>
          <li>Email: {fetchedUser.email}</li>
          <li>Address(Street): {fetchedUser.address.street}</li>
          <li>Company: {fetchedUser.company.name}</li>
          <li>Phone: {fetchedUser.phone}</li>
          <li>Website: {fetchedUser.website}</li>
        </ul>
      )}

      <Title>Recent Posts</Title>
      {posts &&
        posts
          .filter((post: any) => post['userId'] === Number(id))
          .map((post: any) => (
            <Card>
              {' '}
              <div
                className="flex flex-col justify-center"
                onClick={() => navigate(`/post/${id}/comments`)}
                id={id}
              >
                <Heading1>{post.title}</Heading1>
                <Paragraph>{post.body}</Paragraph>
              </div>
            </Card>
          ))}

      <Title className="p-5 bg-green-400 rounded-lg w-1/2 mt-20 mx-auto">
        ToDos:
      </Title>
      <div className="bg-white p-20 w-1/2 mx-auto rounded-lg">
        {todos ? (
          todos
            .filter(({ userId }) => userId === Number(id))
            .map(({ title, completed }) => (
              <div className="flex">
                <input type="radio" className="text-green-500 mr-3" />
                <div
                  className={`${completed ? 'line-through' : ''} text-gray-500`}
                >
                  {title}
                </div>
              </div>
            ))
        ) : (
          <div>{todosError}</div>
        )}
      </div>
    </Container>
  );
};
export default User;
