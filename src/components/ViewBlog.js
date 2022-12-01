import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ViewBlog.css'
function ViewBlog({blogsData,editeBlogs}) {
    const navigate = useNavigate();
    const [isEditeFormOpen,setIsEditeFormOpen] = useState(false);
    const [selectedBlogId,setSelectedBlogId] = useState(null)
    const themeRef  = useRef()
    const authorRef = useRef()
    const dateRef = useRef()
    const photoRef = useRef()
    const viewBlogHandler = (id)=>{
        navigate(`/blogs/${id}`)
    }
    
    const editeBlogHandler = (b)=>{
        setIsEditeFormOpen(true);
        setSelectedBlogId(b.id)

        themeRef.current.value = b.theme;
        authorRef.current.value = b.author;
        dateRef.current.value = b.date;
        photoRef.current.value = b.photo;
    }

    const submitEditeBlogHandler = (e)=>{
        e.preventDefault();
        setIsEditeFormOpen(false);
        editeBlogs(prevState=>prevState.map(b=>b.id === selectedBlogId ? {...b,[themeRef.current.name]:themeRef.current.value,[authorRef.current.name]:authorRef.current.value,[dateRef.current.name]:dateRef.current.value,[photoRef.current.name]:photoRef.current.value} : b))
    }
  return (
        <div className="view-blog">
            <h1 className='view-blog__main-title'>Blogs List</h1>
            {blogsData.map((b)=>{
                return (
                    <div className="view-blog__blog" key={b.id}>
                        <div className="view-blog__blogHeader">
                            <h3 className='view-blog__theme'>them : {b.theme}</h3>
                            <span className='view-blog__author'>author : {b.author}</span>
                            <span className='view-blog__date'>date : {b.date}</span>
                        </div>
                        <div className="view-blog__photo">
                            <img src={b.photo} alt="author" />
                        </div>
                        <div className="view-blog__actions">
                            <button className='view-blog__btn' onClick={()=>editeBlogs(prevState=>prevState.filter(blog=>blog.id!==b.id))}>delete</button>
                            <button className='view-blog__btn' onClick={()=>viewBlogHandler(b.id)}>view blog</button>
                            <button className='view-blog__btn' onClick={()=>editeBlogHandler(b)}>edite blog</button>
                        </div>
                    </div>
                )
            })}
       {<div className="view-blog__overlay" style={{visibility:`${isEditeFormOpen ? 'visible' : 'hidden'}`}}>

        <form onSubmit={(e)=>submitEditeBlogHandler(e)}>
                <input type="text" className='view-blog__input' placeholder='theme' name='theme' ref={themeRef}/>
                <input type="text" className='view-blog__input' placeholder='author' name='author' ref={authorRef}/>
                <input type="date" className='view-blog__input' name='date' ref={dateRef}/>
                <input type='text' className='view-blog__input' name='photo' placeholder='photo' ref={photoRef}/>
                <button className='view-blog__submit'>edite</button>
            </form>
       </div>}

        </div>
  )
}

export default ViewBlog