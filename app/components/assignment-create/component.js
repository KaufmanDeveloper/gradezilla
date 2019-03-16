import Component from '@ember/component';

import {
  inject as service
} from '@ember/service';
import {
  task
} from 'ember-concurrency';

export default Component.extend({
  store: service(),
  router: service(),

  // saveRunning: this.get('save'),

  save: task(function*() {
    const store = this.get('store');
    let assignment = store.createRecord('assignment', {
      name: this.get('name'),
    });
    yield assignment.save();
  }),

  name: null,

  actions: {
    cancelCreate() {
      debugger;
      this.get('router').transitionTo('assignments');
    },
    create() {
      this.get('save').perform();
    }
  },
});
