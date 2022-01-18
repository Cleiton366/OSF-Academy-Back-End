const app = require("../src/app");
const request = require("supertest");
require("dotenv").config();

describe("Sign In", () => {
    it("should authenticate with valid credentials", async () => {
        const response = await request(app)
        .post("/auth/signin")
        .send({
            secretKey: process.env.API_KEY,
            email: "example-test-03433@gmail.com",
            password: "123"
        });

        expect(response.body).toHaveProperty("user");
    });

    it("should not authenticate with invalid credentials", async () => {
        const response = await request(app)
        .post("/auth/signin")
        .send({
            secretKey: process.env.API_KEY,
            email: "example-test-03433@gmail.com",
            password: "1234"
        });

        expect(response.body).toHaveProperty("error");
    });
});

describe("Sign Up", () => {
    it("should not sign up with email already in use", async () => {
        const response = await request(app)
        .post("/auth/signup")
        .send({
            secretKey: process.env.API_KEY,
            name: "Example Test",
	        email: "example-test-03433@gmail.com",
	        password: "321"
        });

        expect(response.body).toHaveProperty("error");
    });
}); 