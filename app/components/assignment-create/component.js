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

  assignmentIsSelected: null,
  assignment: null,
  canDelete: false,

  createAssignment: task(function*() {
    if (this.get('router.currentRouteName') == 'assignments.assignment' && !this.get('assignment')) {
      yield this.set('assignment', this.get('store').createRecord('assignment'));
    }
  }).on('init'),

  save: task(function*() {
    const assignment = this.get('assignment');
    yield assignment.save();
  }),

  delete: task(function*() {
    const assignment = this.get('assignment');
    yield assignment.destroyRecord();
  }),

  actions: {
    cancelCreate() {
      this.get('assignment').rollbackAttributes();
      this.set('assignmentIsSelected', false);
      this.get('router').transitionTo('assignments');
    },
    create() {
      this.get('save').perform().then(() => {
        this.set('assignment', null);
        this.set('assignmentIsSelected', false);
        this.get('router').transitionTo('assignments');
      });
    },
    delete() {
      this.get('delete').perform().then(() => {
        this.set('assignmentIsSelected', false);
      });
    },
  },
});
