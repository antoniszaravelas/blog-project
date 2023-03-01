import { Route, Routes } from 'react-router-dom';
import AlbumPhotos from './components/AlbumPhotos';
import Comments from './components/Comments';
import Container from './components/Container';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <a className="text-white bg-black" href="/">
        home
      </a>
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
