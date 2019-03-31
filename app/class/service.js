import Service from '@ember/service';

import {
    inject as service
  } from '@ember/service';
import {
    task,
  } from 'ember-concurrency';
  import { computed } from '@ember/object';

export default Service.extend({
    store: service(),

    classes: computed(function() {
        return this.get('store').findAll('class');
    }),
});
