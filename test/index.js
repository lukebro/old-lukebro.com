
describe('smoke', () => {
  it('can show the homepage', (done) => {
    request.get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.contain('Lukasz Brodowski');
        done();
      });
  });

  it('can show a 404 message', (done) => {
    request.get('/lol')
      .end((err, res) => {
        res.should.have.status(404);
        res.text.should.contain('There is nothing to see here, move along.');
        done();
      });
  });
});
