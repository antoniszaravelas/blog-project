import { Route, Routes } from 'react-router-dom';
import Comments from './components/Comments';
import Container from './components/Container';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
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
    </Routes>
  );
}

export default App;
