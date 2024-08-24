import supertest from "supertest";
import "dotenv/config";
import request from "../config/request";
import apiToken from "../config/token";

export const createRandomUser = async () => {
  const data = {
    email: `bluesmurf${Math.floor(Math.random() * 9999)}@smurfmail.za`,
    name: "Test name",
    gender: "male",
    status: "inactive",
  };

  const result = await request
    .post("users")
    .set("Authorization", `Bearer ${apiToken}`)
    .send(data);
    return result.body.id;
};
