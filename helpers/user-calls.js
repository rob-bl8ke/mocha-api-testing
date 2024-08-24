import supertest from "supertest";
import "dotenv/config";

const request = supertest(process.env.BASE_URL);

export const createRandomUser = async () => {
  const data = {
    email: `bluesmurf${Math.floor(Math.random() * 9999)}@smurfmail.za`,
    name: "Test name",
    gender: "male",
    status: "inactive",
  };

  const result = await request
    .post("users")
    .set("Authorization", `Bearer ${process.env.TOKEN}`)
    .send(data);
    return result.body.id;
};
