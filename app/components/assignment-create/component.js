import Component from '@ember/component';

import {
  inject as service
} from '@ember/service';
import {
  getProperties
} from '@ember/object';

export default Component.extend({
  store: service(),
  router: service(),

  name: null,

  actions: {
    cancelCreate() {
      this.get('router').transitionTo('assignments');
    },
    create() {
      const store = this.get('store');
      let assignment = store.createRecord('assignment', {
        name: this.get('name'),
      });
      assignment.save();
    }
  },
});
