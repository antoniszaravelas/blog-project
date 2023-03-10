import useFetch from '../hooks/useFetch';
import { Heading1, Title } from '../typography/Headings';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';

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
      <Title className="mx-auto">Album</Title>
      <div className="flex flex-col items-start md:items-center">
        {albums &&
          albums
            .filter((album) => album.userId === Number(id))
            .map(({ title, id: idd }) => (
              <Card
                className="transition duration-300 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer   hover:scale-110
              "
                key={title}
              >
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

      {albumError && (
        <ErrorComponent>
          Sorry, there was an error fetching the Album names! {albumError}
        </ErrorComponent>
      )}
    </>
  );
};

export default Albums;
