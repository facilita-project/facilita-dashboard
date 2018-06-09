import lazyLoading from './lazyLoading'

export default {
  name: 'Notifications',
  path: '/notifications',
  component: lazyLoading('notifications/Notifications'),
  meta: {
    title: 'menu.notifications',
    iconClass: 'vuestic-icon vuestic-icon-comments'
  }
}
