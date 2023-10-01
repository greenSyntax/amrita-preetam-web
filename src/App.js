import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Amrita from './components/Amrita';
import About from './components/About';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Detail from './components/Detail';
import Contact from './components/Contact';
import Contribution from './components/Contribution';
import Report from './components/Report';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" Component={PostList}></Route>
          <Route path="/list" Component={PostList}></Route>
          <Route path="/about" extact Component={About}></Route>
          <Route path="/post/" Component={PostList}></Route>
          <Route path="/post/:postId" Component={Detail}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/contribution" Component={Contribution}></Route>
          <Route path="/amrita" Component={Amrita}></Route>
          <Route path="/report" Component={Report}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
