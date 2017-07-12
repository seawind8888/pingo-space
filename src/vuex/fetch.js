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


export const fetchSchoolex = (token,learn) => {
  console.log(2)
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