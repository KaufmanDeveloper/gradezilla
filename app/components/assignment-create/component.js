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

  save: task(function*() {
    const store = this.get('store');
    let assignment = store.createRecord('assignment', {
      name: this.get('name'),
      dueDate: this.get('dueDate'),
      scoreType: this.get('selectedScoreTypeValue'),
      category: this.get('selectedCategoryValue'),
      description: this.get('description')
    });
    yield assignment.save();
  }),

  actions: {
    cancelCreate() {
      this.get('router').transitionTo('assignments');
    },
    create() {
      this.get('save').perform().then(() => {
        this.get('router').transitionTo('assignments');
      });
    }
  },
});
