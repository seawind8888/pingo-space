import {
  fetchLearnex,
  fetchSchoolex,
  fetchCellSchoolex,
  fetchEnrollmentsInfo,
  fetchUserInfo
} from './fetch.js'
//判断访客模式
let token = window.localStorage.token || ''

// 获取俱乐部信息
export function getLearnexInfo({
  commit,
  state
}) {
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
}) {
  return fetchSchoolex(token, state.learn)
    .then((res) => {
      commit('FETCH_SCHOOLEX_FINISH', [res.data])
    })
}

//获取单独排课信息
export function getSchoolexCellInfo({
  commit,
  state
}, id) {
  state.isReady = false
  return fetchCellSchoolex(token, id)
    .then((res) => {
      commit('FETCH_SCHOOLEX_CELL_FINISH', res.data)
    })
}

//获取已选课程信息
export function getEnrollmentsInfo({
  commit,
  state
}, pk) {
  return fetchEnrollmentsInfo(token, pk)
    .then((res) => {
      commit('FETCH_ENROLLMENTS_FINISH', [res.data])
    })
}

//获取用户信息
export function getUserInfo({
  commit,
  state
}, pk) {
  return fetchUserInfo(token, pk)
    .then((res) => {
      commit('FETCH_USER_FINISH', [res.data])
    })
}

//异步获取pkid后获取排课
export async function getHomeInfo({
  dispatch
}) {
  await dispatch('getLearnexInfo',token)
  await dispatch('getSchoolexInfo',token)
}
