const app = require("../src/app");
const request = require("supertest");
require("dotenv").config();

describe("product", () => {
    it("should get a product by it's id", async () => {
        const response = await request(app)
        .get("/getProduct/P0048")
        expect(response.body.length).toBeGreaterThan(0);
    });

    it("should get a product by it's id and render the product's page", async () => {
        const response = await request(app)
        .get("/product/P0048")
        expect(response.status).toBe(200);
    });

    it("should get products in a certain category", async () => {
        const response = await request(app)
        .get("/products_on_category/mens-clothing-jackets")
        expect(response.status).toBe(200);
    });
});