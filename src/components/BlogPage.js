import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './BlogPage.css'
function BlogPage({blogsList}) {
    const {blogId} = useParams();
    const curBlog = blogsList.filter(b=>b.id===blogId);
    const navigate = useNavigate()
  return (
    <div className='blog-page'>
        <ArrowBackIcon className='blog-page__back-icon' onClick={()=>navigate(-1)}/>
        <h1 className='blog-page__main-title'>{curBlog[0]?.author} blog</h1>
        {curBlog.map(b=>{
            return <div className='blog-page__blog-content'>
                    <div className="blog-page__image">
                        <img src={b.photo} alt="author" />
                    </div>
                    <div className="blog-page__info">
                        <h2 className="blog-page__theme">
                            theme : {b.theme}
                        </h2>
                        <h3 className='blog-page__author'>author : {b.author}</h3>
                        <span className='blog-page__date'>date : {b.date}</span>
                        <p className="blog-page__blog">{b.blog}</p>
                    </div>
            </div>
        })[0]}
    </div>
  )
}

export default BlogPage