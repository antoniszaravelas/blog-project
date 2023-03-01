import { useParams } from 'react-router-dom';

interface PhotosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const AlbumPhotos = () => {
  const { albumID } = useParams();

  return <div>{albumID}</div>;
};

export default AlbumPhotos;
