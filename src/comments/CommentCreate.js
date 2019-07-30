import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'

class CommentCreate extends Component{
    state = {
        dataForm:{
            comment:""
            
        }
    }
    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm) 
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })   
    } 
       
    handleSubmit = (event) => {
        event.preventDefault();
        const newComment = this.state.dataForm
        newComment.post = this.props.postId
        const user = this.props.user
        create(user,newComment)
        .then(() => alert('created'))
        .then(() => this.props.updateComments())
        .catch((error) => console.log(error)) 
    } 

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group"></div>
                <textarea rows="5" onChange={this.handleChange}  type="text" name="comment" value={this.state.dataForm.comment} class="form-control" placeholder="Comment"> </textarea>
               
                {/* <input onChange={this.handleChange}  type="text" name="comment" value={this.state.dataForm.comment} class="form-control" placeholder="Password"/> */}
                {/* <label>Description</label>
                <input  onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description}/> */}
                <button className="btn btn-outline-secondary" type="submit">Comment</button>
            </form>
        )
    }
}
export default withRouter(CommentCreate)