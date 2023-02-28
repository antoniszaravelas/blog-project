import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

interface UserProps {
  url: string;
}

const User: React.FC<UserProps> = ({ url }) => {
  let { id } = useParams();
  const { data: user, error } = useFetch(`${url}/${id}`, []);
  console.log(user);
  return <div>hi</div>;
};
export default User;
