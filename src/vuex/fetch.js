import axios from 'axios'
const baseURL = process.env === 'production' ? 'http://staging.pingospace.com' : ''


export const fetchLearnex = (token) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/learnex/1`,
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      "Authorization": `Token ${token}`
    }
  })
}


export const fetchSchoolex = (token, learn) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/schoolex?learn=${learn}`,
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      "Authorization": `Token ${token}`
    }
  })
}

export const fetchCellSchoolex = (token, id) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/schoolex/${id}`,
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      "Authorization": `Token ${token}`
    }
  })
}

export const fetchEnrollmentsInfo = (token, pk) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/users/${pk}/enrollments`,
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      "Authorization": `Token ${token}`
    }
  })
}

export const fetchUserInfo = (token, pk) => {
  return axios({
    method: 'get',
    // url: '/api/auth/login',
    url: `${baseURL}/api/users/${pk}/userrests`,
    headers: {
      "Accept": "application/json",
      "Accept-Language": "zh-hans",
      "Authorization": `Token ${token}`
    }
  })
}
