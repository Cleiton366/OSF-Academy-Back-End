const app = require("../src/app");
const request = require("supertest");
require("dotenv").config();

describe("Categories", () => {
    it("should get all categories", async () =>{
        const response = await request(app)
        .get("/all_categories");
        expect(response.body.length).toBeGreaterThan(0);
    });

    it("should get a category by it's Id", async () => {
        const response = await request(app)
        .get("/category/mens-clothing-pants");
        expect(response.body.id).toBe("mens-clothing-pants");
    });

    it("should get a category by it's parentId", async () => {
        const response = await request(app)
        .get("/category/parent/mens-clothing");
        expect(response.body.length).toBeGreaterThan(0);
    });
});