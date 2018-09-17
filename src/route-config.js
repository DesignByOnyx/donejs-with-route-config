const modules = {
  'home': '~/home.component',
  'messages': '~/messages/messages',
};

module.exports = [
  { route: '/', nav: 'Home', data: { moduleId: modules.home } },
  { route: '/chat', nav: 'Chat Messages', data: { moduleId: modules.messages } },
];

module.exports.modules = modules;
