import {
  fetchLearnex,
  fetchSchoolex,
  fetchCellSchoolex,
  fetchEnrollmentsInfo,
  fetchUserInfo,
  fetchClassList
} from './fetch.js'

// 获取俱乐部信息
export function getLearnexInfo({
  commit,
  state
}) {
  //判断访客模式
  return fetchLearnex(window.localStorage.token)
    .then((res) => {
      //传入俱乐部pkid
      state.learn = res.pk
      commit('FETCH_LEARNEX_FINISH', res.data)
    })
}

//获取排课信息
export function getSchoolexInfo({
  commit,
  state
}) {
  //判断访客模式
  return fetchSchoolex(state.learn)
    .then((res) => {
      commit('FETCH_SCHOOLEX_FINISH', [res])
    })
}

//获取单独排课信息
export function getSchoolexCellInfo({
  commit,
  state
}, id) {
  state.isReady = false
  return fetchCellSchoolex(id)
    .then((res) => {
      commit('FETCH_SCHOOLEX_CELL_FINISH', res)
    })
}

export function getClassInfo({
  commit,
  state
}) {
  state.classIsReady = false
  return fetchClassList()
    .then((res) => {
      commit('FETCH_CLASS_LIST', [res])
    })
}
//获取已选课程信息
export function getEnrollmentsInfo({
  commit,
  state
}, pk) {
  return fetchEnrollmentsInfo(pk)
    .then((res) => {
      commit('FETCH_ENROLLMENTS_FINISH', [res.data])
    })
}

//获取用户信息
export function getUserInfo({
  commit,
  state
}, pk) {
  return fetchUserInfo(pk)
    .then((res) => {
      commit('FETCH_USER_FINISH', [res.data])
    })
}

//异步获取pkid后获取排课
export async function getHomeInfo({
  dispatch
}) {
  await dispatch('getLearnexInfo')
  await dispatch('getSchoolexInfo')
}
