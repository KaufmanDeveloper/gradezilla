import Component from '@ember/component';

import {
  inject as service
} from '@ember/service';
import {
  task,
} from 'ember-concurrency';

export default Component.extend({
  store: service(),
  router: service(),

  selectedClass: null,

  getClasses: task(function*() {
    let classes = yield this.get('store').findAll('class');
    this.set('classes', classes);
    if (!this.get('selectedClass')) {
      this.set('selectedClass', this.get('classes.firstObject.data.name'));
    }
  }).on('init'),

  actions: {
    selectClass(selectedClass) {
      this.set('selectedClass', selectedClass.name);
    },
  }
});
