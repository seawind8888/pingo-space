import axios from 'axios'
import Qs from 'qs'
const baseURL = process.env.NODE_ENV === 'production' ? 'http://staging.pingospace.com' : ''
axios.defaults.headers.common['Authorization'] = `Token ${window.localStorage.token}`

export const fetchLearnex = () => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/learnex/1`,
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
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      // "Authorization": `Token ${window.localStorage.token}`
    }
  })
}

export const fetchUserInfo = (pk) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/users/${pk}/userrests`,
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      // "Authorization": `Token ${window.localStorage.token}`
    }
  })
}
