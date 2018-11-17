import Component from '@ember/component';

export default Component.extend({
  classNames: ['fader'],
  classNameBindings: [],
  attributeBindings: ['delayStyle:style'],
  tagName: 'span',

  text: '', // passed in
  delay: '0s', //passed in

  delayStyle: Ember.computed('delay', function() {
    return `animation-delay:${this.get('delay')}`;
  })
});
