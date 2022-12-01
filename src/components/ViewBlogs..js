import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc,deleteDoc } from "firebase/firestore"; 
import './ViewBlogs.css'
import { db } from '../firebase';
function ViewBlogs({blogsData}) {
    const navigate = useNavigate();
    const [isEditeFormOpen,setIsEditeFormOpen] = useState(false);
    const [selectedBlogId,setSelectedBlogId] = useState(null)
    const themeRef  = useRef()
    const authorRef = useRef()
    const blogRef = useRef();
    const dateRef = useRef()
    const photoRef = useRef()
    const viewBlogHandler = (id)=>{
        navigate(`/blogs/${id}`)
    }
    
    const viewEditeFormHandler = (b)=>{
        setIsEditeFormOpen(true);
        setSelectedBlogId(b.id);
        themeRef.current.value = b.theme;
        authorRef.current.value = b.author;
        dateRef.current.value = b.date;
        blogRef.current.value = b.blog
        photoRef.current.value = b.photo;
    }

    const submitEditeBlogHandler = async (e)=>{
        e.preventDefault();
        await setDoc(doc(db, "blogs", selectedBlogId),{
            author:authorRef.current.value,
            blog:blogRef.current.value,
            date:dateRef.current.value,
            photo:photoRef.current.value,
            theme:themeRef.current.value
        })
        setIsEditeFormOpen(false);
    }

    const deleteBlogHandler = async (b)=>{
        await deleteDoc(doc(db, "blogs", b.id));
    }
    const closeEditFormHandler = (e)=>{
        if(e.target === e.currentTarget ){
            setIsEditeFormOpen(false);
        }
    }
  return (
        <div className="view-blog">
            <h1 className='view-blog__main-title'>Blogs List</h1>
            <div className="view-blog__all-blogs">
                {blogsData.map((b)=>{
                    return (
                        <div className="view-blog__blog" key={b.id}>
                            <div className="view-blog__blogHeader">
                                <h3 className='view-blog__theme'>theme : <span>{b.theme}</span></h3>
                                <h3 className='view-blog__author'>author : <span>{b.author}</span></h3>
                                <h3 className='view-blog__date'>date : <span>{b.date}</span></h3>
                            </div>
                            <div className="view-blog__photo">
                                <img src={b.photo} alt="author" />
                            </div>
                            <div className="view-blog__actions">
                                <button className='view-blog__btn' onClick={()=>deleteBlogHandler(b)}>delete</button>
                                <button className='view-blog__btn' onClick={()=>viewBlogHandler(b.id)}>view blog</button>
                                <button className='view-blog__btn' onClick={()=>viewEditeFormHandler(b)}>edite blog</button>
                            </div>
                        </div>
                    )
                })}
            </div>
       {<div className="view-blog__overlay" style={{visibility:`${isEditeFormOpen ? 'visible' : 'hidden'}`}} onClick={(e)=>closeEditFormHandler(e)}>
        <form onSubmit={(e)=>submitEditeBlogHandler(e)} >
                <input type="text" className='view-blog__input' placeholder='theme' name='theme' ref={themeRef}/>
                <input type="text" className='view-blog__input' placeholder='author' name='author' ref={authorRef}/>
                <input type="date" className='view-blog__input' name='date' ref={dateRef}/>
                <textarea className='view-blog__input' name='blog' ref={blogRef}></textarea>
                <input type='text' className='view-blog__input' name='photo' placeholder='photo' ref={photoRef}/>
                <button className='view-blog__submit'>edite</button>
        </form>
       </div>}

        </div>
  )
}

export default ViewBlogs