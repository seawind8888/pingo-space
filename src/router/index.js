import App from '../App'
const home = r => require.ensure([], () => r(require('../page/clubIndex')), 'home')
const detail = r => require.ensure([], () => r(require('../page/classDetail')), 'detail')

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
    }
  ]
}]
