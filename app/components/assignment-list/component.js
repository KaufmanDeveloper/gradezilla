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
import {
  sort
} from '@ember/object/computed';
import {
  computed
} from '@ember/object';

export default Component.extend({
  store: service(),
  router: service(),

  loading: alias('getAssignments.isRunning'),
  currentAssignment: null,
  assignmentIsSelected: false,

  groupHeaderHandler(item) {
    return item.get('category')
  },

  categorySort: Object.freeze(['category:asc']),
  sortedAssignments: sort('assignments', 'categorySort'),

  getAssignments: task(function* () {
    let assignments = yield this.get('store').query('assignment', {
      class: this.get('selectedClass')
    });
    this.set('assignments', assignments);
  }),

  assignments: computed(function () {
    if (this.get('selectedClass')) {
      this.get('getAssignments').perform();
    }
  }),

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
