import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsDetails()
  }

  getBlogsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))

    this.setState({
      blogsList: formatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogsList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <ul className="blog-list-container">
        {blogsList.map(blogDetails => (
          <BlogItem key={blogDetails.id} blogDetails={blogDetails} />
        ))}
      </ul>
    )
  }
}

export default BlogList
