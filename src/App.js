import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route, useNavigate} from 'react-router-dom'
import NewBlog from './components/NewBlog';
import ViewBlogs from './components/ViewBlogs.';
import { useEffect, useState } from 'react';
import Contact from './components/Contact';
import BlogPage from './components/BlogPage';
import Home from './components/Home';
import {query,collection,onSnapshot} from 'firebase/firestore'
import { db } from './firebase';
function App() {
  const [blogs,setBlogs]=useState([]);
  useEffect(() => {
    const q = query(collection(db,'blogs'));
    onSnapshot(q,querySnapshot=>{
        setBlogs(querySnapshot.docs.map(doc=>{
          return {...doc.data(),id:doc.id}
        }))
    })
  }, []);
  return (
    <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-blog' element={<NewBlog/>}/>
            <Route path='/view-blogs' element={<ViewBlogs blogsData={blogs}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs/:blogId' element={<BlogPage blogsList={blogs}/>}/>
          </Routes>
    </div>
     
  );
}

export default App;
