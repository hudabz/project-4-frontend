import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'
import './PostCreate.css'

class PostCreate extends Component{
    state = {
        dataForm:{
            title:"",
            description:''
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
        const newPost = this.state.dataForm
        const user = this.props.user
        create(user,newPost)
        .then(() => alert('created'))
        .then(() => this.props.history.push('/posts'))
        .catch((error) => console.log(error))
    }

    render(){
        return(
        <React.Fragment >
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"/>
            <div className='create-post'> 
              <form onSubmit={this.handleSubmit} >
                 
                 <label> Title</label> 
                <textarea  rows="1" onChange={this.handleChange}  type="text" name="title" value={this.state.dataForm.title} class="form-control" placeholder="Title"> </textarea>
                 {/* <input onChange={this.handleChange} type="text" name="title" value={this.state.dataForm.title}/>  */}
                 <label>Description</label> 
                 <textarea rows="5" onChange={this.handleChange}  type="text" name="description" value={this.state.dataForm.description} class="form-control" placeholder="What's in your heart"> </textarea>
                 {/* <input className='desc-box' onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description}/> */}
                 <button type="submit" className ="btn btn-outline-secondary button">Create</button>
              
             </form> 
             </div>  
       </React.Fragment> 
        )
    }
}

export default withRouter(PostCreate)