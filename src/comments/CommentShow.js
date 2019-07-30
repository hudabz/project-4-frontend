import React, {Component} from 'react' 
import {show} from './api' 

class CommentShow extends Component {
    state = { 
        comment: {} 
    }
    componentDidMount() {
        const user = this.props.user
        const commentId = this.props.commentId
        console.log('id', commentId)
        show(user, commentId) 
        .then(res => { 
            const showComment = res.data.comment
             this.setState({ 
                    comment: showComment 
             }) 
          }
       ) 
    }

    render() {
        console.log(this.state.comment)
        return ( 
            <div>  
                <h2>Title</h2> 
                <p> Description: {this.state.comment.comment}  </p>
            </div>
        )
    }
} 

export default CommentShow 