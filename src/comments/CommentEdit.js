import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

class CommentEdit extends Component{
    state={
        dataForm:{
            comment:''
        
        }
    }

    componentDidMount(){
        const user = this.props.user;
        const commentId = this.props.match.params.id;
        show(user,commentId)
        .then((response) => {
            const comment = response.data.comment
            this.setState({
                dataForm:comment
            })
        })
        .catch(error => console.log(error))
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


    handleSubmit = (event) =>{
        event.preventDefault();
        const user = this.props.user;
        const commentId = this.props.match.params.id;
        const updateComment = this.state.dataForm;
        console.log(this.props)
        update(user,updateComment,commentId)
        .then(() => this.props.history.push(`/comments/${commentId}`))
        .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Comment</label>
                <input onChange={this.handleChange} type="text" name="comment" value={this.state.dataForm.comment}/>
                {/* <label>Description</label>
                <input  onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description}/> */}
                <button type="submit">Update</button>
        </form>
        )
    }
}



export default withRouter(CommentEdit)
