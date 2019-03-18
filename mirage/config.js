export default function() {
  this.loadFixtures();

  this.namespace = '/api';

  this.get('/gradezilla/v1/assignments', {
    timing: 1000
  });

  this.post('/gradezilla/v1/assignments', {
    timing: 1000
  });

  this.put('gradezilla/v1/assignments/:id', {
    timing: 1000
  });

  this.delete('gradezilla/v1/assignments/:id', {
    timing: 1000
  });
}
