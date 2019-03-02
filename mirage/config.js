export default function() {
  const server = this;
  this.loadFixtures();

  this.namespace = '/api';

  this.get('/gradezilla/v1/assignments', (schema, request) => {
    server.createList('assignment', 5);
    let assignments = schema.assignments.all();
    return {
      "assignments": assignments.models
    }
  }, {
    timing: 1000,
  });
}
