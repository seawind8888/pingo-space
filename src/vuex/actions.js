import {
  fetchLearnex,
  fetchSchoolex
} from './fetch.js'
//判断访客模式
let token = token || ''

// 获取俱乐部信息
export function getLearnexInfo({
  commit,
  state
}, token) {
  return fetchLearnex(token)
    .then((res) => {
      //传入俱乐部pkid
      state.learn = res.data.pk
      commit('FETCH_LEARNEX_FINISH', res.data)
    })
}

//获取排课信息
export function getSchoolexInfo({
  commit,
  state
}, token) {
  return fetchSchoolex(token, state.learn)
    .then((res) => {
      commit('FETCH_SCHOOLEX_FINISH', [res.data])
    })
}

//获取已选课程信息
export function getEnrollmentsInfo({
  commit,
  state
}, token, pk) {
  return fetchEnrollmentsInfo(token, pk)
    .then((res) => {
      commit('FETCH_ENROLLMENTS_FINISH', [res.data])
    })
}

//获取用户信息
export function getUserInfo({
  commit,
  state
}, token, pk) {
  return fetchUserInfo(token, pk)
    .then((res) => {
      commit('FETCH_USER_FINISH', [res.data])
    })
}

//异步获取pkid后获取排课
export async function getHomeInfo({
  dispatch
}, token) {
  await dispatch('getLearnexInfo',token)
  await dispatch('getSchoolexInfo',token)
}
