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

  loading: alias('getAssignments.isRunning'),

  getAssignments: task(function*() {
    /*
    const query = {}
    query.start = 0;
    query.count = 30;
    */
    const assignments = yield this.get('store').findAll('assignment');
    this.set('assignments', assignments);
  }).on('init')
});
