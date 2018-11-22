import Component from '@ember/component';

export default Component.extend({
  classNames: ['screen', 'home'],

  faders: [
    {text: 'developer', delay: '0s'},
    {text: 'engineer', delay: '1s'},
    {text: 'freelancer', delay: '2s'},
    {text: 'nerd', delay: '3s'},
  ]
});
