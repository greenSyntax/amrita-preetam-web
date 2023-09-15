import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AboutPage from './components/AboutPage';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" Component={PostList}></Route>
          <Route path="/list" Component={PostList}></Route>
          <Route path="/about" extact Component={AboutPage}></Route>
          <Route path="/post/" Component={PostList}></Route>
          <Route path="/post/:postId" Component={PostDetail}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
