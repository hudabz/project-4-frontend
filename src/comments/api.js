import apiUrl from '../apiConfig'
import axios from 'axios'

export const index = (user, postId) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/posts/${postId}/comments`,
    headers: {
        'Authorization': `Bearer ${user.token}`
      }
  })
} 

  
export const show = (user, commentId) => {
    return axios({
      method: 'GET',
      url: apiUrl + `/comments/${commentId}`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }
    })
  }


  export const create = (user, newComment) => {
    return axios({
      method: 'POST', 
      url: apiUrl + '/comments/',
      headers: {
          'Authorization': `Bearer ${user.token}`
        }, 
        data:{
          comment: newComment
        }
    })
  }

  export const update = (user, updateComment, commentId) => {
    return axios({
      method: 'PUT', 
      url: apiUrl + `/comments/${commentId}`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }, 
        data:{
          comment: updateComment
        }
    })
  } 
   
  export const destroy = (user, commentId) => {
    return axios({
      method: 'DELETE', 
      url: apiUrl + `/comments/${commentId}`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }
    })
  }