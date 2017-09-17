import App from './App'

const entry = r => require.ensure([], () => r(require('./pages/pass/entry')))
const login = r => require.ensure([], () => r(require('./pages/pass/login')))
const regist = r => require.ensure([], () => r(require('./pages/pass/regist')))
const passForgot = r => require.ensure([], () => r(require('./pages/pass/forgot')))
const passModify = r => require.ensure([], () => r(require('./pages/pass/modify')))

const home = r => require.ensure([], () => r(require('./pages/home')))
const clubJoin = r => require.ensure([], () => r(require('./pages/club/join')))
const clubDetail = r => require.ensure([], () => r(require('./pages/club/detail')))
const classAll = r => require.ensure([], () => r(require('./pages/class/all')))
const classDetail = r => require.ensure([], () => r(require('./pages/class/detail')))
const vipClassDetail = r => require.ensure([], () => r(require('./pages/class/vip-detail')))
const classDue = r => require.ensure([], () => r(require('./pages/class/due')))
const classAddress = r => require.ensure([], () => r(require('./pages/class/address')))
const classSchedule = r => require.ensure([], () => r(require('./pages/class/schedule')))
const addrDetail = r => require.ensure([], () => r(require('./pages/class/address-detail')))

export default [
  {
    path: '',
    redirect: '/entry'
  },
  {
    path: '/entry',
    component: entry
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/regist',
    component: regist
  },
  {
    path: '/pass-forgot',
    component: passForgot
  },
  {
    path: '/pass-modify',
    component: passModify
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/club-join',
    component: clubJoin
  },
  {
    path: '/club-detail',
    component: clubDetail
  },
  {
    path: '/schedule',
    component: classSchedule
  },
  {
    path: '/all',
    component: classAll
  },
  {
    path: '/detail/:id',
    component: classDetail
  },
  {
    path: '/vip-detail/:id',
    component: vipClassDetail
  },
  {
    path: '/due',
    component: classDue
  },
  {
    path: '/address',
    component: classAddress
  },
  {
    path: '/addr-detail',
    component: addrDetail
  }
]