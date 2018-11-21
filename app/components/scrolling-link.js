import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  tagName: 'a',

  target: '', //passed in
  duration: 500,

  click : function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(this.get('target')).offset().top
    }, this.get('duration'));
  }
});
