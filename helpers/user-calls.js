import supertest from "supertest";
import "dotenv/config";
import request from "../config/request";
import apiToken from "../config/token";
import { faker } from "@faker-js/faker";

export const createRandomUser = async () => {
  const data = {
    email: faker.internet.email({ firstName: "alice" }),
    name: faker.person.fullName({firstName: "alice"}),
    gender: "female",
    status: "inactive",
  };

  const result = await request
    .post("users")
    .set("Authorization", `Bearer ${apiToken}`)
    .send(data);

  // console.log(data);
  return result.body.id;
};
