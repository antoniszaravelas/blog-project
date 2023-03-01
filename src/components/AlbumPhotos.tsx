import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Title } from '../typography/Headings';
import Container from './Container';
import { v4 as uuidv4 } from 'uuid';
import ErrorComponent from './ErrorComponent';

interface PhotosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const AlbumPhotos = () => {
  const { albumID } = useParams();
  const {
    data: photos,
    error: photosError,
  }: { data: PhotosProps[]; error: string } = useFetch(
    'https://jsonplaceholder.typicode.com/photos',
    []
  );

  return (
    <Container>
      <Title>Gallery Album {albumID}</Title>
      <div className="grid md:grid-cols-4 md:gap-10 md:p-20 grid-cols-2 gap-2">
        {photos &&
          photos
            .filter(({ albumId }) => albumId === Number(albumID))
            .map(({ title, url }) => (
              <img key={uuidv4()} src={url} alt={title} />
            ))}
      </div>
      {photosError && (
        <ErrorComponent>
          Sorry, there was an error! {photosError}
        </ErrorComponent>
      )}
    </Container>
  );
};

export default AlbumPhotos;
