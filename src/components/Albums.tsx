import useFetch from '../hooks/useFetch';
import { Heading1, Paragraph, Title } from '../typography/Headings';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

interface AlbumsComponentProps {
  id: string | undefined;
}

interface AlbumsProps {
  userId: number;
  id: number;
  title: string;
}

const Albums: React.FC<AlbumsComponentProps> = ({ id }) => {
  const navigate = useNavigate();
  const {
    data: albums,
    error: albumError,
  }: { data: AlbumsProps[]; error: string } = useFetch(
    'https://jsonplaceholder.typicode.com/albums',
    []
  );

  return (
    <>
      <Title className="p-5 bg-green-400 rounded-lg w-1/2  mx-auto">
        Album
      </Title>
      <div className="flex flex-col items-center">
        {albums &&
          albums
            .filter((album) => album.userId === Number(id))
            .map(({ title, id: idd }) => (
              <Card>
                {' '}
                <div
                  className="flex flex-col justify-center"
                  onClick={() => navigate(`/user/${id}/album/${idd}`)}
                >
                  <Heading1>{title}</Heading1>
                </div>
              </Card>
            ))}
      </div>
    </>
  );
};

export default Albums;
