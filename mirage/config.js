export default function() {
  const server = this;
  this.loadFixtures();

  this.namespace = '/api';

  this.get('/gradezilla/v1/assignments', () => {
    let assignments = server.createList('assignment', 5);
    //return server.findAll('assignment');
    //return assignments;
    return {
      "assignments": [
        {
          "id": 1,
          "name": "example"
        },
        {
          "id": 1,
          "name": "example2"
        },
      ],
    };
  }, {
    timing: 1000,
  });
}
