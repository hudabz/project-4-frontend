import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import {index, destroy} from './api.js' 
import './PostIndex.css' 



class PostIndex extends Component{
    state ={ 
        posts: []
    }
    componentDidMount() {
        index(this.props.user)
        .then(response => {
            this.setState ({
                posts: response.data.posts
            })
        })
        .catch((error) => console.log(error))


       
    }  

    destroy(postId) {
       const user = this.props.user 
         destroy(user, postId) 
         .then( () => alert('Deleted'))
         .then(() => {
             const newPost = this.state.posts.filter((post) => post._id != postId)
             this.setState({
                 posts:newPost 
             })
         }) 
         .catch((error) => console.log(error))
    }  
     
    render () {
        return (
            <div className='show-posts '>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
            {this.state.posts.map((post, index) => (
              <div className='one-post animated fadeInUp' key={index}> 
                <Link to={`/posts/${post._id}`} ><h2 className='post-title'>{post.title}</h2> </Link>
               <p> {post.description}</p>  
               <button onClick={ () => this.destroy(post._id)} type="button" class="btn btn-outline-secondary">Delete</button>
               <Link to={`/posts/${post._id}/edit`} > <button type="button" class="btn btn-outline-secondary">Edit</button> </Link>
              </div>
            ))} 

          </div>
        )
    }
}
export default PostIndex 