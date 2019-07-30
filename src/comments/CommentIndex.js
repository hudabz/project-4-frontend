import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import {index, destroy} from './api.js' 
import CommentCreate from "../comments/CommentCreate"



class CommentIndex extends Component{
    state ={ 
        comments: []
    }
    updateComments = () => {
        index(this.props.user, this.props.postId)
        
        .then(response => {
            this.setState ({
                comments: response.data.comments
            })
        })
        .catch((error) => console.log(error))
    }
    componentDidMount() {
        this.updateComments()
    }  

    destroy(commentId) {
       const user = this.props.user 
         destroy(user, commentId) 
         .then( () => alert('Deleted'))
         .then(() => {
             const newComment = this.state.comments.filter((comment) => comment._id != commentId)
             this.setState({ 
                 comments:newComment 
             })
         }) 
         .catch((error) => console.log(error))
    }  
     
    render () {
        return ( 
            <div> 
              <CommentCreate updateComments={this.updateComments} postId={this.props.postId} alert={this.props.alert} user={this.props.user} />

            {this.state.comments.map((comment, index) => (
              <div key={index}> 
                <Link to={`/comments/${comment._id}`} ><h2>Comment:</h2> </Link>
               <p> Description: {comment.comment}</p>  
               <button onClick={ () => this.destroy(comment._id)}> Delete Comment</button>
               <Link to={`/comments/${comment._id}/edit`} > <button> Edit Comment</button> </Link>
              </div> 
            ))} 
          </div>
        )
    }
}
export default CommentIndex 