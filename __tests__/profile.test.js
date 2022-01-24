const app = require("../src/app");
const request = require("supertest");
require("dotenv").config();

describe("profile", () => {
    var token = "";
    beforeAll(async () => {
        const response = await request(app)
        .post("/auth/signin")
        .send({
            email: "test366@gmail.com",
            password: "123"
        });
        token = response.body.token;
    });

    it("should return user profile", async () => {
        const response = await request(app)
        .get(`/profile/${token}`)
        expect(response.status).toBe(200);
    });
});