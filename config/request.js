import "dotenv/config";
import supertest from "supertest";

const request = supertest(process.env.BASE_URL);

export default request;
