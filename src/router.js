import App from './App'

const entry = r => require.ensure([], () => r(require('./pages/entry')))
const login = r => require.ensure([], () => r(require('./pages/login')))
const regist = r => require.ensure([], () => r(require('./pages/regist')))
const passForgot = r => require.ensure([], () => r(require('./pages/pass/forgot')))
const passModify = r => require.ensure([], () => r(require('./pages/pass/modify')))

const home = r => require.ensure([], () => r(require('./pages/home')))
const classAll = r => require.ensure([], () => r(require('./pages/class/all')))
const classDetail = r => require.ensure([], () => r(require('./pages/class/detail')))
const classDue = r => require.ensure([], () => r(require('./pages/class/due')))
const classAddress = r => require.ensure([], () => r(require('./pages/class/classAddress')))
const addrDetail = r => require.ensure([], () => r(require('./pages/class/addressDetail')))

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
    path: '/passForgot',
    component: passForgot
  },
  {
    path: '/passModify',
    component: passModify
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/all',
    component: classAll
  },
  {
    path: '/detail',
    component: classDetail
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
    path: '/addrDetail',
    component: addrDetail
  }
]