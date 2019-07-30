import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import {indexAll,names} from './api' 
import './Dashboard.css'


class Dashboard extends Component{
    state ={ 
        posts: [],
        names: [],
        namesAndPosts: [] //[{name:'',post:{}},{},{}]
    }
    componentDidMount() {
        indexAll(this.props.user)
        .then(response => {
            this.setState ({
                posts: response.data.posts
            })
        })
        .then( () => {
            const posts = this.state.posts 
            Promise.all(posts.map(() => {
                return names()
            }))
            .then(responses => {
                return responses.map(res => res.data.nickname)
            })
            .then((names) => {
                this.setState({
                    names: names
                })
            })
            .then(() => {
                 //fill namesAndPosts
                 for(let i = 0 ; i < this.state.posts.length ; i++){
                    const name = this.state.names[i];
                    const post = this.state.posts[i];
                    const obj = {name:name,post:post}
                    const copy = this.state.namesAndPosts.slice()
                    copy.push(obj)
                    this.setState({
                        namesAndPosts:copy
                    })

                }
            })
        })
        .catch((error) => console.log(error)) 
    }  
    
    render () {
        return (
            <div className='flip'>
                
            {/* {this.state.namesAndPosts.map((elemnet, index) => (
              <div key={index}> 
                <Link to={`/posts/${elemnet.post._id}`} ><h2>Title: {elemnet.post.title}</h2></Link>
                <p>Name: {elemnet.name}</p>
               <p> Description: {elemnet.post.description}</p>  
              </div>
            ))}  */}


           {this.state.namesAndPosts.map((elemnet, index) => (
    
            <div key={index} className="flip-card card" ontouchstart="this.classList.toggle('hover');">
             <div className="flip-card-inner">
                <div className="flip-card-inner-front">
                <span> <p>{elemnet.name}</p></span>
                </div>
                <div className="flip-card-inner-back">
                <h3 className="flip-card-inner-back-title">{elemnet.post.title}</h3>
                <p className="flip-card-inner-back-text">{elemnet.post.description} </p>
                <Link to={`/posts/${elemnet.post._id}`} ><button> Visit</button></Link>
                </div>
            </div>
       </div> 
            /* <Link to={`/posts/${elemnet.post._id}`} ><button> Visit</button></Link> */
                        
                    
                        ))} 
                        
                    </div>
                    )
                }
            }
export default Dashboard 