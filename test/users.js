import supertest from 'supertest';
import "dotenv/config";
import { expect } from 'chai';

const apiToken = process.env.TOKEN;
const request = supertest('https://gorest.co.in/public/v2/')

describe('Users', () => {
    it('GET /users', (done) => {
      request.get(`users?access-token=${apiToken}`).end((err, res) => {
        console.log(res.body);
        // expect(res.body).to.be.empty;
        expect(res.body).to.not.be.empty;
        done();
      });
    });
});