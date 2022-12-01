import React, { useState } from 'react'
import './NewBlog.css'
import {addDoc,collection} from 'firebase/firestore'
import {db} from '../firebase'
import { useNavigate } from 'react-router-dom';
function NewBlog() {
    const [blogData,setBlogData] = useState({});
    const navigate = useNavigate();
    const inputChangeHandler = (e)=>{
        const {name,value} = e.target;
        setBlogData(prevState=>({...prevState,[name]:value}))
    }   
    
    const addNewBlog = (e)=>{
      e.preventDefault();
      try {
        addDoc(collection(db, "blogs"), {
          ...blogData
        });
        navigate('/view-blogs');
      } catch (e) {
       alert(e.message);
      }
    }
  return (
    <div className="new-blog">
        <h1 className='new-blog__main-title'>Create New Blog</h1>
        <form onSubmit={(e)=>addNewBlog(e)}>
            <input type="text" className='new-blog__input' placeholder='theme' name='theme' required onChange={(e)=>inputChangeHandler(e)}/>
            <input type="text" className='new-blog__input' placeholder='author' name='author' required onChange={(e)=>inputChangeHandler(e)}/>
            <input type="date" className='new-blog__input' name='date' required onChange={(e)=>inputChangeHandler(e)}/>
            <textarea className='new-blog__input' name='blog' onChange={(e)=>inputChangeHandler(e)}></textarea>
            <input type='text' className='new-blog__input' name='photo' required onChange={(e)=>inputChangeHandler(e)} placeholder='author photo'/>
            <button className='new-blog__submit'>add</button>
        </form>
    </div>
  )
}

export default NewBlog