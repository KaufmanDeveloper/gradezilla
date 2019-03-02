export default function() {
  const server = this;
  this.loadFixtures();

  this.namespace = '/api';

  this.get('/gradezilla/v1/assignments', () => {
    var assignments = server.createList('assignment', 5);
    return assignments;
  }, {
    timing: 1000,
  });
}
