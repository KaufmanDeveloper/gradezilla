import Component from '@ember/component';

import {
  inject as service
} from '@ember/service';
import {
  task,
} from 'ember-concurrency';
import {
  alias
} from '@ember/object/computed';

export default Component.extend({
  store: service(),
  router: service(),

  loading: alias('getAssignments.isRunning'),
  currentAssignment: null,
  assignmentIsSelected: false,

  groupHeaderHandler(item) {
    return item.get('category')
  },

  getAssignments: task(function*() {
    let assignments = yield this.get('store').findAll('assignment');
    assignments = assignments.sortBy('category');
    this.set('assignments', assignments);
  }).on('init'),

  actions: {
    createAssignment() {
      this.get('router').transitionTo('assignments.assignment');
    },
    selectAssignment(assignment) {
      this.set('currentAssignment', assignment);
      this.set('assignmentIsSelected', true);
    }
  },
});
