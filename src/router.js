import App from './App'

const entry = r => require.ensure([], () => r(require('./pages/entry')))
const login = r => require.ensure([], () => r(require('./pages/login')))
const regist = r => require.ensure([], () => r(require('./pages/regist')))
const passForgot = r => require.ensure([], () => r(require('./pages/pass/forgot')))
const passModify = r => require.ensure([], () => r(require('./pages/pass/modify')))
const home = r => require.ensure([], () => r(require('./pages/home')))
const club = r => require.ensure([], () => r(require('./pages/club/club')))
const clubJoin = r => require.ensure([], () => r(require('./pages/club/join')))
const clubDetail = r => require.ensure([], () => r(require('./pages/club/detail')))
const clubDue = r => require.ensure([], () => r(require('./pages/club/due')))
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
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/entry',
    component: entry,
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
    path: '/club',
    component: club,
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
    path: '/club-due',
    component: clubDue
  },
  {
    path: '/class-all',
    component: classAll
  },
  {
    path: '/class-detail/:id',
    component: classDetail
  },
  {
    path: '/vip-class-detail/:id',
    component: vipClassDetail
  },
  {
    path: '/class-due',
    component: classDue
  },
  {
    path: '/class-address',
    component: classAddress
  },
  {
    path: '/addr-detail',
    component: addrDetail
  },
  {
    path: '/class-schedule',
    component: classSchedule
  }
]