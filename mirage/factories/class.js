import {
  Factory,
  faker,
} from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i;
  },
  name() {
    return faker.lorem.word();
  }
});
