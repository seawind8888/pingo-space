import App from '../App'
const home = r => require.ensure([], () => r(require('../page/clubIndex')), 'home')
const detail = r => require.ensure([], () => r(require('../page/classDetail')), 'detail')
const signup = r => require.ensure([], () => r(require('../page/classSignUp')), 'signup')
const address = r => require.ensure([], () => r(require('../page/classAddress')), 'address')

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
      path: '/detail',
      component: detail
    },
    {
      path: '/signup',
      component: signup
    },
    {
      path: '/address',
      component: address
    }
  ]
}]
