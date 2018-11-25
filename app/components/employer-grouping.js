import Component from '@ember/component';

export default Component.extend({
  classNames: ['employer-grouping'],
  open: false,

  actions: {
    toggleOpen: function() {
      this.toggleProperty('open');
    }
  }
});
