import Component from '@ember/component';

export default Component.extend({
  tagName: 'a',
  classNames: ['item'],

  click() {
    this.set('isOpen', true)
  },
});
