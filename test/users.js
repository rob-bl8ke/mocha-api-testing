import supertest from 'supertest';
import "dotenv/config";

const apiToken = process.env.TOKEN;
const request = supertest('https://gorest.co.in/public/v2/')

describe('Users', () => {
    it('GET /users', () => {
        request.get(`users?access-token=${apiToken}`)
            .end((err, res) => {
                console.log(err);
                console.log(res.body);
            });
        ;
    });
});