import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  tagName: 'div',
  classNames: ['icon-link'],

  icon: '', // passed in
  link: '', // passed in
  text: '' //passed in
});
