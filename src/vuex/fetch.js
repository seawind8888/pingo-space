import Qs from 'qs'
import 'whatwg-fetch'
// const baseURL = process.env.NODE_ENV === 'production' ? 'http://staging.pingospace.com' : ''
const baseURL = 'http://staging.pingospace.com'

export const fetchLearnex = () => {
  return fetch(`http://staging.pingospace.com/api/learnex/1`)
    .then((response) => response.json())
}


export const fetchSchoolex = (param) => {
  return fetch(`${baseURL}/api/schoolex?${Qs.stringify(param)}`)
    .then((response) => response.json())
}

export const fetchCellSchoolex = (id) => {
  return fetch(`${baseURL}/api/schoolex/${id}`)
    .then((response) => response.json())
}

export const fetchClassList = (param) => {
  return fetch(`${baseURL}/api/classgroups?${Qs.stringify(param)}`)
    .then((response) => response.json())
}
export const fetchRecommendations = () => {
  return fetch(`${baseURL}/api/recommendations`)
    .then((response) => response.json())
}


export const fetchLearnType = () => {
  return fetch(`${baseURL}/api/learntype`)
    .then((response) => response.json())
}

export const fetchEnrollmentsInfo = (schoolId) => {
  return fetch(`${baseURL}/api/enrollments?school=${schoolId}`, {
      headers: {
        'Authorization': `Token ${window.localStorage.token}`
      }
    })
    .then((response) => response.json())
}

export const fetchUserInfo = (pk) => {
  return fetch(`${baseURL}/api/users/${pk}`, {
      headers: {
        'Authorization': `Token ${window.localStorage.token}`
      }
    })
    .then((response) => response.json())
  // return axios({
  //   method: 'get',
  //   // url: '/api/auth/login',
  //   url: `${baseURL}/api/users/${pk}/userrests`,
  //   baseURL: 'http://staging.pingospace.com',
  //   headers: {
  //     "Accept": "application/json",
  //     "Accept-Language": "zh-hans",
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "Authorization": `Token ${window.localStorage.token}`
  //   }
  // })
}
