import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Title } from '../typography/Headings';
import Container from './Container';

interface UserProps {
  url: string;
}

const User: React.FC<UserProps> = ({ url }) => {
  let { id } = useParams();
  const { data: users, error } = useFetch(`${url}`, []);

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
    </Container>
  );
};
export default User;
