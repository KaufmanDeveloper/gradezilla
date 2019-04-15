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
  sort,
  readOnly
} from '@ember/object/computed';
import {
  computed,
} from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.addObserver('selectedClass', this, 'performGetAssignments');
  },

  store: service(),
  router: service(),

  loading: alias('getAssignments.isRunning'),
  currentAssignment: null,
  assignmentIsSelected: false,
  selectedClassName: readOnly('selectedClass'),

  groupHeaderHandler(item) {
    return item.get('category')
  },

  performGetAssignments() {
    this.set('assignments', null);
    this.get('getAssignments').perform();
  },

  categorySort: Object.freeze(['category:asc']),
  sortedAssignments: sort('assignments', 'categorySort'),

  getAssignments: task(function* () {
    let assignments = yield this.get('store').query('assignment', {
      className: this.get('selectedClassName')
    });
    this.set('assignments', assignments);
  }),

  assignments: computed('selectedClassName', function () {
    if (this.get('selectedClassName')) {
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
