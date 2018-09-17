import loader from '@loader';
import DefineMap from 'can-define/map/';
import route from 'can-route';
import routeConfig from './route-config';
import stache from 'can-stache';
import 'can-route-pushstate';
import 'can-debug#?./is-dev';

const AppViewModel = DefineMap.extend({
  env: {
    default: () => ({NODE_ENV:'development'}),
    serialize: false
  },
  message: {
    default: 'Hello World!',
    serialize: false
  },
  title: {
    default: 'donejs-chat',
    serialize: false
  },
  moduleId: {
    default: routeConfig[0].data.moduleId
  },
  currentModule: {
    get(lastVal, resolve) {
      loader.import(this.moduleId).then(module => {
        if (module) {
          if (module.Component && module.Component.prototype.tag) {
            resolve(stache(`<${module.Component.prototype.tag} />`)());
          }
          if (module.default && module.default.prototype && module.default.prototype.tag) {
            resolve(stache(`<${module.default.prototype.tag} />`)());
          }
        }
        return null;
      });
    }
  }
});

routeConfig.forEach(config => {
  route.register(config.route, config.data);
});

export default AppViewModel;
