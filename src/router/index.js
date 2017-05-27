import App from '../App'
const spaceEnter = r => require.ensure([], () => r(require('../pages/spaceEnter')))
const clubHome = r => require.ensure([], () => r(require('../pages/clubHome')))
const spaceLogin = r => require.ensure([], () => r(require('../pages/spaceLogin')))
const spaceRegist = r => require.ensure([], () => r(require('../pages/spaceRegist')))
const passForgot = r => require.ensure([], () => r(require('../pages/passForgot')))
const passModify = r => require.ensure([], () => r(require('../pages/passModify')))

const classAll = r => require.ensure([], () => r(require('../pages/classAll')))
const classDetail = r => require.ensure([], () => r(require('../pages/classDetail')))
const classDue = r => require.ensure([], () => r(require('../pages/classDue')))
const classAddress = r => require.ensure([], () => r(require('../pages/classAddress')))
const addrDetail = r => require.ensure([], () => r(require('../pages/addressDetail')))

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    redirect: '/spaceEnter'
  },
  {
    path: '/spaceEnter',
    component: spaceEnter
  },
  {
    path: '/spaceLogin',
    component: spaceLogin
  },
  {
    path: '/spaceRegist',
    component: spaceRegist
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
    path: '/clubIndex',
    component: clubHome,
    children: [
      {
        path: '/classAll',
        component: classAll
      },
      {
        path: '/classDetail',
        component: classDetail
      },
      {
        path: '/classDue',
        component: classDue
      },
      {
        path: '/classAddress',
        component: classAddress
      },
      {
        path: '/addrDetail',
        component: addrDetail
      }
    ]
  }
  ]
}]
