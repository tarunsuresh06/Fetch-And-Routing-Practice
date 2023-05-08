import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props

  const {id, author, avatarUrl, imageUrl, title, topic} = blogDetails

  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <li className="blog-item-container">
        <img src={imageUrl} className="blog-item-img" alt={title} />

        <div>
          <p className="blog-text">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="profile-container">
            <img src={avatarUrl} className="avatar-img" alt={author} />
            <p className="blog-text">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
