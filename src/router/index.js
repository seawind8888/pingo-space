import App from '../App'
const home = r => require.ensure([], () => r(require('../page/clubIndex')), 'home')
const all = r => require.ensure([], () => r(require('../page/classAll')), 'all')
const login = r => require.ensure([], () => r(require('../page/clubLogin')), 'login')
const detail = r => require.ensure([], () => r(require('../page/classDetail')), 'detail')
const signUp = r => require.ensure([], () => r(require('../page/classSignUp')), 'signUp')
const address = r => require.ensure([], () => r(require('../page/classAddress')), 'address')
const addrDetail = r => require.ensure([], () => r(require('../page/addressDetail')), 'addrDetail')

export default [{
  path: '/',
  component: App,
  children: [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/all',
      component: all
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/signUp',
      component: signUp
    },
    {
      path: '/address',
      component: address
    },
    {
      path: '/addrDetail',
      component: addrDetail
    }
  ]
}]
