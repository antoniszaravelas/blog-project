import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Heading1, Title, Paragraph } from '../typography/Headings';
import Card from './Card';
import Container from './Container';
import { useNavigate } from 'react-router-dom';
import {
  faCircleCheck,
  faXmarkCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Albums from './Albums';
import { v4 as uuidv4 } from 'uuid';
import ErrorComponent from './ErrorComponent';

interface UserProps {
  url: string;
}

interface TodosProps {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}

interface FetchedUserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  website: string;
  phone: string;
}

const User: React.FC<UserProps> = ({ url }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const {
    data: users,
    error: userError,
  }: { data: FetchedUserProps[]; error: string } = useFetch(`${url}`, []);
  const [todosArray, setTodosArray] = useState<TodosProps[]>([
    {
      title: '',
      completed: true,
    },
  ]);
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

  const fetchedUser: FetchedUserProps = users.filter(
    (x) => x['id'] === Number(id)
  )[0];

  useEffect(() => {
    setTodosArray(todos);
  }, [todos]);

  return (
    <Container>
      <Title>Information</Title>
      {fetchedUser && (
        <div className="flex flex-col items-center">
          <Card>
            {' '}
            <div className="flex flex-col justify-center">
              {Object.entries(fetchedUser).map((property) => (
                <div key={uuidv4()}>
                  <Paragraph className="italic">{property[0]}</Paragraph>
                  <Paragraph className="font-bold">
                    {typeof property[1] === 'object' && property[1] !== null
                      ? JSON.stringify(property[1])
                          .replace(/{|}/gi, '')
                          .replace(/"/g, '')
                          .split(',')
                          .map((x) => <div key={uuidv4()}>{x}</div>)
                      : property[1]}
                  </Paragraph>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
      {userError && (
        <ErrorComponent>
          Sorry, there was an error fetching the User! {userError}
        </ErrorComponent>
      )}

      {/* Recent Posts */}
      <Title>Recent Posts</Title>
      <div className="flex flex-col items-center">
        {posts &&
          posts
            .filter((post: any) => post['userId'] === Number(id))
            .map((post: any) => (
              <Card
                className="transition duration-300 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer   hover:scale-110
              "
                key={uuidv4()}
              >
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
      </div>
      {postsError && (
        <ErrorComponent>
          Sorry, there was an error fetching the posts! {postsError}
        </ErrorComponent>
      )}

      {/* TODOS */}
      <Title>ToDos:</Title>
      <div className="bg-white md:p-10 p-4 md:w-1/2 mx-auto rounded-lg">
        {todosArray &&
          todosArray
            .filter(({ userId }) => userId === Number(id))
            .map(({ title, completed }) => (
              <div key={uuidv4()} className="flex justify-between items-center">
                <div className="flex items-center md:p-2 p-1 ">
                  <FontAwesomeIcon
                    icon={completed ? faCircleCheck : faXmarkCircle}
                    size="lg"
                    className={`${
                      completed ? 'text-green-500' : 'text-red-500'
                    } mr-2`}
                  />
                  <div
                    onClick={() =>
                      setTodosArray(
                        todosArray.map((todo) =>
                          todo.title === title
                            ? { ...todo, completed: !todo.completed }
                            : todo
                        )
                      )
                    }
                    className={`${
                      completed ? 'line-through' : ''
                    } text-gray-500 hover:cursor-pointer`}
                  >
                    {title}
                  </div>
                </div>
                <FontAwesomeIcon
                  onClick={() =>
                    setTodosArray(
                      todosArray.filter((todo) => todo.title !== title)
                    )
                  }
                  className="text-black hover:cursor-pointer hover:scale-125 hover:text-red-500 transition duration-300 ease-in-out"
                  icon={faTrash}
                />
              </div>
            ))}
      </div>
      {todosError && (
        <ErrorComponent>
          Sorry, there was an error fetching the ToDo List! {todosError}
        </ErrorComponent>
      )}

      {/* ALBUM */}
      <Albums id={id} />
    </Container>
  );
};
export default User;
