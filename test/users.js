import supertest from 'supertest';
import "dotenv/config";
import { expect } from 'chai';

const apiToken = process.env.TOKEN;
const request = supertest('https://gorest.co.in/public/v2/')

describe('Users', () => {
    let userId;

    describe('POST', () => {
        it('/users', () => {
            const data = {
                email: `bluesmurf${Math.floor(Math.random() * 9999)}@smurfmail.za`,
                name: 'Test name',
                gender: 'male',
                status: 'inactive'
            };
    
            return request.post('users')
                .set('Authorization', `Bearer ${apiToken}`)
                .send(data).then(res => {
                    expect(res.body).to.deep.include(data);
                    // set userId
                    userId = res.body.id;
            });
        });

    });

    describe('GET', () => {
        it('/users', () => {
          return request.get(`users?access-token=${apiToken}`).then((res) => {
            expect(res.body).to.not.be.empty; });
        });
    
        it('/users/:id', () => {
            return request
            .get(`users/${userId}?access-token=${apiToken}`)
            .then((res) => {
                expect(res.body.id).to.be.eq(userId);
            });
        });

        it('/users with query params', () => {
            const url = `users?access-token=${apiToken}&page=2&gender=female&status=active`
    
            return request.get(url).then(res => {
                res.body.forEach(data => {
                    expect(data.gender).to.eq('female');
                    expect(data.status).to.eq('active');
                });
            });
        });
    });
    
    describe('PUT', () => {
        it('/users', () => {
            const data = {
                email: `fluffywhite${Math.floor(Math.random() * 9999)}@powerdogs.com`,
                name: 'Fluffy White',
                gender: 'male',
                status: 'active'
            };
    
            return request
              .put(`users/${userId}`)
              .set("Authorization", `Bearer ${apiToken}`)
              .send(data)
              .then((res) => {
                // Assert everything...
                // data.email = 'test@mail.co.za';
                expect(res.body).to.deep.include(data);
              });
        });
    });

    describe('DELETE', () => {
        it('/users', () => {
            const expectedResponse = {};
            
            return request
            .delete(`users/${userId}`)
            .set("Authorization", `Bearer ${apiToken}`)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResponse);
            });
        });
    });
});