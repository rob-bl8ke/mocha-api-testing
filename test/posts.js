import supertest from "supertest";
import "dotenv/config";
import { expect } from "chai";

const apiToken = process.env.TOKEN;
const request = supertest("https://gorest.co.in/public/v2/");

describe.only("User Posts", () => {
  let postId;

  it("/posts", async () => {
    const data = {
      user_id: 7358017,
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
});
