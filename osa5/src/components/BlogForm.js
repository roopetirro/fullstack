import { useState } from 'react'

const BlogForm = ({ blogs, setBlogs, createBlog }) => {
    const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setNewBlog({ ...newBlog, [name]: value })
    }

    const addBlog = async (event) => {
      event.preventDefault()
      createBlog(newBlog.title, newBlog.author, newBlog.url)
      setNewBlog({ title: '', author: '', url: '' })
    }
  
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addBlog}>
          <div>
            Title: <input name="title" value={newBlog.title} onChange={handleChange} />
          </div>
          <div>
            Author: <input name="author" value={newBlog.author} onChange={handleChange} />
          </div>
          <div>
            URL: <input name="url" value={newBlog.url} onChange={handleChange} />
          </div>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
  
  export default BlogForm