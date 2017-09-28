import App from './App'
import entry from './pages/entry'
import login from './pages/login'
import regist from './pages/regist'
import passForgot from './pages/pass/forgot'
import passModify from './pages/pass/modify'
import home from './pages/home'
import club from './pages/club/club'
import clubJoin from './pages/club/join'
import clubDetail from './pages/club/detail'
import clubDue from'./pages/club/due'
import classAll from'./pages/class/all'
import classDetail from'./pages/class/detail'
import classDue from'./pages/class/due'
import classAddress from'./pages/class/address'
import classSchedule from'./pages/class/schedule'
import addrDetail from'./pages/class/address-detail'

// const entry = r => require.ensure([], () => r(require('./pages/entry')))
// const login = r => require.ensure([], () => r(require('./pages/login')))
// const regist = r => require.ensure([], () => r(require('./pages/regist')))
// const passForgot = r => require.ensure([], () => r(require('./pages/pass/forgot')))
// const passModify = r => require.ensure([], () => r(require('./pages/pass/modify')))
// const home = r => require.ensure([], () => r(require('./pages/home')))
// const club = r => require.ensure([], () => r(require('./pages/club/club')))
// const clubJoin = r => require.ensure([], () => r(require('./pages/club/join')))
// const clubDetail = r => require.ensure([], () => r(require('./pages/club/detail')))
// const clubDue = r => require.ensure([], () => r(require('./pages/club/due')))
// const classAll = r => require.ensure([], () => r(require('./pages/class/all')))
// const classDetail = r => require.ensure([], () => r(require('./pages/class/detail')))
// const vipClassDetail = r => require.ensure([], () => r(require('./pages/class/vip-detail')))
// const classDue = r => require.ensure([], () => r(require('./pages/class/due')))
// const classAddress = r => require.ensure([], () => r(require('./pages/class/address')))
// const classSchedule = r => require.ensure([], () => r(require('./pages/class/schedule')))
// const addrDetail = r => require.ensure([], () => r(require('./pages/class/address-detail')))

export default [
  {
    path: '',
    redirect: '/entry'
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
    path: '/club-detail/:id',
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
    path: '/class-detail',
    component: classDetail
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
    path: '/class-schedule/:id',
    component: classSchedule
  }
]