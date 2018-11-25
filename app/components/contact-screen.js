import Component from '@ember/component';

export default Component.extend({
  classNames: ['screen', 'contact', 'alt-screen'],

  actions: {
    submit: function() {
      console.log("Firing into the ether!");
      return false;
    }
  }
});
