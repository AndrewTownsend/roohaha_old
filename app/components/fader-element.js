import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  classNames: ['fader'],
  classNameBindings: [],
  attributeBindings: ['delayStyle:style'],
  tagName: 'span',

  text: '', // passed in
  delay: '0s', //passed in

  delayStyle: computed('delay', function() {
    return htmlSafe(`animation-delay:${this.get('delay')}`);
  })
});
