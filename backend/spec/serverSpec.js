const request = require('supertest');
const app = require('../server');  // Your app file

describe('GET /', () => {
  it('responds with Hello from Backend!', (done) => {
    request(app).get('/')
      .expect('Hello from Backend!')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
