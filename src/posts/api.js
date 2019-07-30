import apiUrl from '../apiConfig'
import axios from 'axios'
import Axios from 'axios';

export const index = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/posts',
    headers: {
        'Authorization': `Bearer ${user.token}`
      }
  })
}
//api for all posts 
export const indexAll = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/posts/all`, 
    headers: {
        'Authorization': `Bearer ${user.token}`
      }
  })
} 

export const show = (user, postId) => {
    return axios({
      method: 'GET',
      url: apiUrl + `/posts/${postId}`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }
    })
  }


  export const create = (user, newPost) => {
    return axios({
      method: 'POST', 
      url: apiUrl + '/posts/',
      headers: {
          'Authorization': `Bearer ${user.token}`
        }, 
        data:{
          post: newPost
        }
    })
  }

  export const update = (user, updatePost, postId) => {
    return axios({
      method: 'PUT', 
      url: apiUrl + `/posts/${postId}`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }, 
        data:{
          post: updatePost
        }
    })
  }
  
  export const destroy = (user, postId) => {
    return axios({
      method: 'DELETE', 
      url: apiUrl + `/posts/${postId}`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }
    })
  }



  // export const names = (numberOfName) => {
  //   return Axios({
  //     method:'GET',
  //     url: `https://uinames.com/api/?amount=${numberOfName}`
  //   })
  // }


  export const names = () => {
    return Axios({
      method:'POST',
      url: `https://api.codetunnel.net/random-nick`,
      data: {}
    })
  }