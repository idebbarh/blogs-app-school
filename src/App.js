import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import NewBlog from './components/NewBlog';
import ViewBlog from './components/ViewBlog';
import { useState } from 'react';
import Contact from './components/Contact';
import BlogPage from './components/BlogPage';
function App() {
  const [blogs,setBlogs]=useState([]);
  const navigate = useNavigate();
  const addBlog = (e,blogData)=>{
      e.preventDefault();
      setBlogs(prevState=>[...prevState,blogData])
      navigate('/view-blogs');
  }
  return (
    <div className="App">
      
          <NavBar/>
          <Routes>
            <Route path='/create-blog' element={<NewBlog addBlog={addBlog} blogsList={blogs}/>}/>
            <Route path='/view-blogs' element={<ViewBlog blogsData={blogs} editeBlogs={setBlogs}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs/:blogId' element={<BlogPage blogsList={blogs}/>}/>
          </Routes>
        
    </div>
     
  );
}

export default App;
