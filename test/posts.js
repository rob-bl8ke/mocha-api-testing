import supertest from "supertest";
import "dotenv/config";
import { expect } from "chai";
import { createRandomUser } from "../helpers/user-calls";
import request from "../config/request";
import apiToken from "../config/token";

describe("User Posts", () => {
  let postId, userId;

  before(async () => {
    userId = await createRandomUser();
  });

  it("/posts", async () => {
    const data = {
      user_id: userId,
      title: "My title",
      body: "my blog post",
    };

    const res = await request
      .post("posts")
      .set("Authorization", `Bearer ${apiToken}`)
      .send(data);
      
      expect(res.body).to.deep.include(data);
      postId = res.body.id;
    });
    
    it('GET /posts/:id', async () => {
      await request
      .get(`posts/${postId}`)
      .set("Authorization", `Bearer ${apiToken}`)
      .expect(200)
    });
    
    describe('Negative Tests', () => {
      it("401 authentication failed", async () => {
        const data = {
          user_id: userId,
          title: "My title",
          body: "my blog post",
        };
        
        const res = await request
        .post("posts")
        .send(data);
        
        expect(res.statusCode).to.eq(401);
        expect(res.body.message).to.eq("Authentication failed");
      });

      it("No title returns 422 validation failed", async () => {
        const data = {
          user_id: userId,
          body: "my blog post",
        };

        const res = await request
          .post("posts")
          .set("Authorization", `Bearer ${apiToken}`)
          .send(data);
        
        expect(res.statusCode).to.eq(422);
        expect(res.body[0].field).to.eq("title");
        expect(res.body[0].message).to.eq("can't be blank");
      });
    });
  });
  