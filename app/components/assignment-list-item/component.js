import Component from '@ember/component';

import {
  computed
} from '@ember/object';

export default Component.extend({
  tagName: 'a',
  classNames: ['item assignment-list-item'],

  descriptionLimited: computed('assignment.description', function() {
    const description = this.get('assignment.description');
    let descriptionLimited = description;
    if (description && description.length > 40) {
    descriptionLimited = description.substring(0, 40);
      descriptionLimited = descriptionLimited + "..."
    }
    return descriptionLimited;
  }),

  click() {
    this.set('isOpen', true)
  },
});
