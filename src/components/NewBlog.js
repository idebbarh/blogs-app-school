import React, { useState } from 'react'
import './NewBlog.css'
function NewBlog({addBlog,blogsList}) {
    const [blogData,setBlogData] = useState({});

    const inputChangeHandler = (e)=>{
        const {name,value} = e.target;
        setBlogData(prevState=>({...prevState,[name]:value,id:blogsList.length+1}))
    }   
  return (
    <div className="new-blog">
    <h1>Create New Blog</h1>
        <form onSubmit={(e)=>addBlog(e,blogData)}>
            <input type="text" className='new-blog__input' placeholder='theme' name='theme' required onChange={(e)=>inputChangeHandler(e)}/>
            <input type="text" className='new-blog__input' placeholder='author' name='author' required onChange={(e)=>inputChangeHandler(e)}/>
            <input type="date" className='new-blog__input' name='date' required onChange={(e)=>inputChangeHandler(e)}/>
            <input type='text' className='new-blog__input' name='photo' required onChange={(e)=>inputChangeHandler(e)}/>
            <button className='new-blog__submit'>add</button>
        </form>
    </div>
  )
}

export default NewBlog