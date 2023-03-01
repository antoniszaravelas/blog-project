import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Title } from '../typography/Headings';
import Container from './Container';

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
      <div className="grid grid-cols-4 p-20 gap-10">
        {photos &&
          photos
            .filter(({ albumId }) => albumId === Number(albumID))
            .map(({ title, thumbnailUrl, url }) => (
              <img src={url} alt={title} />
            ))}
      </div>
    </Container>
  );
};

export default AlbumPhotos;
