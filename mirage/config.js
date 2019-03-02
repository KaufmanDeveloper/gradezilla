export default function() {
  this.loadFixtures();

  this.namespace = '/api';

  this.get('/gradezilla/v1/assignments', (schema, request) => {
    let assignments = schema.assignments.all();
    return {
      "assignments": assignments.models
    }
  }, {
    timing: 1000,
  });
}
