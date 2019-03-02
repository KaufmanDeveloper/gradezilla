import {
  Factory,
  faker,
} from 'ember-cli-mirage';
import moment from 'moment';

export default Factory.extend({
  class() {
    return faker.lorem.word();
  },
  name() {
    return faker.lorem.word();
  },
  category() {
    if (faker.random.boolean()) {
      return 'Test';
    } else {
      return 'Homework';
    }
  },
  scoreType() {
    if (faker.random.boolean()) {
      return 'Points';
    } else {
      return 'Percentage';
    }
  },
  dueDate() {
    const from = moment().subtract(1, 'month').toDate();
    const to = moment().toDate();
    return moment(faker.date.between(from, to)).format('YYYY-MM-DD HH:mm:ss');
  },
  description() {
    return faker.lorem.paragraph();
  }
});
