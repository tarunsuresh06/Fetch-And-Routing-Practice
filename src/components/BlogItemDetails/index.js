import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetail()
  }

  getBlogDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state

    const {title, author, content, imageUrl, avatarUrl} = blogData

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-detail-container">
        <h1 className="blog-detail-heading">{title}</h1>
        <div className="blog-detail-profile-container">
          <img src={avatarUrl} className="avatar-img" alt={author} />
          <p className="blog-text">{author}</p>
        </div>
        <img src={imageUrl} className="blog-detail-img" alt={title} />
        <p className="blog-detail-content">{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
