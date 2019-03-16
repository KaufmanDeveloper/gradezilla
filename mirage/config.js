export default function() {
  this.loadFixtures();

  this.namespace = '/api';

  this.get('/gradezilla/v1/assignments', {
    timing: 1000
  });
  
  this.post('/gradezilla/v1/assignments', {
    timing: 1000
  });
}
