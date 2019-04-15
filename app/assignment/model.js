import DS from 'ember-data';

export default DS.Model.extend({
  className: DS.attr('string'),
  name: DS.attr('string'),
  category: DS.attr('string'),
  scoreType: DS.attr('string'),
  dueDate: DS.attr('date'),
  description: DS.attr('string')
});
