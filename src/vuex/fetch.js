import axios from 'axios'
import Qs from 'qs'
const baseURL = process.env.NODE_ENV === 'production' ? 'http://staging.pingospace.com' : ''
axios.defaults.headers.common['Authorization'] = `Token ${window.localStorage.token}`

export const fetchLearnex = () => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/learnex/1`,
    baseURL: 'http://staging.pingospace.com',
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans"
    }
  })
}


export const fetchSchoolex = (learn) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/schoolex?learn=${learn}`,
    baseURL: 'http://staging.pingospace.com',
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      // "Authorization": `Token ${window.localStorage.token}`
    }
  })
}

export const fetchCellSchoolex = (id) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/schoolex/${id}`,
    baseURL: 'http://staging.pingospace.com',
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      // "Authorization": `Token ${window.localStorage.token}`
    }
  })
}

export const fetchEnrollmentsInfo = (pk) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/users/${pk}/enrollments`,
    baseURL: 'http://staging.pingospace.com',
    withCredentials: true, 
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      "Content-Type": "application/x-www-form-urlencoded",
      // "Authorization": `Token ${window.localStorage.token}`
    }
  })
}

export const fetchUserInfo = (pk) => {
  // return new Promise((resolve,reject) => {
  //   $.ajax({
  //     type: 'get',
  //     url: `http://staging.pingospace.com/api/users/${pk}/userrests`,
  //   })
  // })
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/users/${pk}/userrests`,
    baseURL: 'http://staging.pingospace.com',
    withCredentials: true, 
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Token ${window.localStorage.token}`
    }
  })
}
