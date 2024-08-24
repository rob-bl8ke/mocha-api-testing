import supertest from 'supertest';
import "dotenv/config";
import { expect } from 'chai';

const apiToken = process.env.TOKEN;
const request = supertest('https://gorest.co.in/public/v2/')

describe('Users', () => {
    it('GET /users', () => {
      return request.get(`users?access-token=${apiToken}`).then((res) => {
        expect(res.body).to.not.be.empty; });
    });

    it('GET /users/:id', () => {
        return request
        .get(`users/7357440?access-token=${apiToken}`)
        .then((res) => {
            expect(res.body).to.be.eq(7357440);
        });
    });

    it('GET /users with query params', () => {
        const url = `users?access-token=${apiToken}&page=2&gender=female&status=active`

        return request.get(url).then(res => {
            res.body.forEach(data => {
                expect(data.gender).to.eq('female');
                expect(data.status).to.eq('active');
            });
        });
    });

    it.only('POST /users', () => {
        const data = {
            email: `bluesmurf${Math.floor(Math.random() * 9999)}@smurfmail.za`,
            name: 'Test name',
            gender: 'male',
            status: 'inactive'
        };

        return request.post('users')
            .set('Authorization', `Bearer ${apiToken}`)
            .send(data).then(res => {
                console.log(res.body);
                expect(res.body.email).to.eq(data.email);
                expect(res.body.status).to.eq(data.status);
            });
    });
});