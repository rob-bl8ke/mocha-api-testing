import supertest from 'supertest';
import "dotenv/config";
import { expect } from 'chai';

const apiToken = process.env.TOKEN;
const request = supertest('https://gorest.co.in/public/v2/')

describe('Users', () => {
    it('GET /users', () => {
      return request.get(`users?access-token=${apiToken}`).then((res) => {
        expect(res.body).to.not.be.empty;
      });
    });
});