import React, {Component} from 'react' 
import {show} from './api' 
import CommentIndex from '../comments/CommentIndex'
import './PostShow.css'

class PostShow extends Component {
    state = { 
        post: {}
    
    }
    // forceUpdate = () => {
    //     this.forceUpdate() 
    // }
    componentDidMount() {
        const user = this.props.user
        const postId = this.props.postId
        show(user, postId) 
        .then(res => { 
            const showPost = res.data.post
             this.setState({
                    post: showPost
                })
            }
        )    
    }

    render() { 
        return ( 
            <div className='show-page'>  
                <h2 className='post-title'>{this.state.post.title}</h2> 
                <p> {this.state.post.description}  </p>
                <br/>
              <CommentIndex postId={this.props.postId} user={this.props.user} />
            </div>
        )
    }
} 

export default PostShow 