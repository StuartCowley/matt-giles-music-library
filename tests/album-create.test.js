const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('create Album', () => {
  let artist;
  beforeEach(async () => {
    const { rows } = await db.query(
      'INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *',
      ['Tame Impala', 'rock']
    );
    artist = rows[0];
  });
  describe('POST', () => {
    it('creates a new artist in the database under artist', async () => {
      const { status, body } = await request(app)
        .post(`/artists/${artist.id}/albums`)
        .send({
          name: 'Currents',
          year: 2015,
        });
      expect(status).to.equal(201);
      expect(body.name).to.equal('Currents');
      expect(body.year).to.equal(2015);

      const {
        rows: [albumsData],
      } = await db.query(`SELECT * FROM Albums WHERE id = ${body.id}`);
      expect(albumsData.name).to.equal('Currents');
      expect(albumsData.year).to.equal(2015);
      expect(albumsData.artistid).to.equal(artist.id);
    });
  });
});
