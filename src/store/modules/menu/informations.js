import lazyLoading from './lazyLoading'

export default {
  name: 'Informations',
  path: '/informations',
  component: lazyLoading('informations/Informations'),
  meta: {
    title: 'menu.informations',
    iconClass: 'vuestic-icon vuestic-icon-files'
  }
}
