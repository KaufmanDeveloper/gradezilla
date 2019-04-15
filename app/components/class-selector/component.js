import Component from '@ember/component';

import {
  inject as service
} from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  store: service(),
  router: service(),
  classService: service('class'),

  classNames: ['class-dropdown'],

  classes: alias('classService.classes'),
  selectedClass: alias('classService.selectedClass'),

  actions: {
    selectClass(selectedClass) {
      this.set('classService.selectedClass', selectedClass.className);
    },
  }
});
