import { Route, Routes } from 'react-router-dom';
import AlbumPhotos from './components/AlbumPhotos';
import Comments from './components/Comments';
import Home from './components/Home';
import User from './components/User';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Link to="/">
        <FontAwesomeIcon
          size="xl"
          className="text-white ml-4"
          icon={faArrowLeft}
        />
        <span className="text-white ml-4 italic">Back to Home</span>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/post/:id/comments"
          element={
            <Comments url="https://jsonplaceholder.typicode.com/comments" />
          }
        />
        <Route
          path="/user/:id"
          element={<User url="https://jsonplaceholder.typicode.com/users" />}
        />
        <Route path="/user/:id/album/:albumID" element={<AlbumPhotos />} />
      </Routes>
    </div>
  );
}

export default App;
