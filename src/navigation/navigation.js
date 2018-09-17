import route from 'can-route';
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './navigation.less';
import view from './navigation.stache';
import routeConfig from '~/route-config';

export const ViewModel = DefineMap.extend({
  items: {
    get() {
      return routeConfig.filter(item => !!item.nav).map(item => ({
        title: item.nav,
        url: route.url(item.data),
        route: item.route,
        isCurrent: route.isCurrent(item.data, true),
      }));
    }
  }
});

export default Component.extend({
  tag: 'main-nav',
  ViewModel,
  view
});
