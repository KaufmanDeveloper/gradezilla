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

  this.post('/gradezilla/v1/assignments', (schema, request) => {
    //debugger;
    const attrs = {
      "assignments": JSON.parse(request.requestBody).assignment
    };
    let response = schema.assignments.create(attrs);
    debugger;
    return response.attrs;
  }, {
    timing: 1000,
  });
}
