const app = require("../src/app");
const request = require("supertest");

describe("Wishlist", () => {
    var token = "";
    beforeAll(async () => {
        const response = await request(app)
        .post("/auth/signin")
        .send({
            email: "example-test-03433@gmail.com",
            password: "123"
        });
        token = response.body.token;
    });
    
    it("should add item to the wishlist", async () => {
        const response = await request(app)
        .post("/wishlist/addItem")
        .set("token", token)
        .send({
            productId: "86736845",
	        variantId: "883360544250",
	        quantity:"1"
        });
        expect(response.body).toHaveProperty("_id");
    });

    it("should not add the same item to the wishlist", async () => {
        const response = await request(app)
        .post("/wishlist/addItem")
        .set("token", token)
        .send({
            productId: "86736845",
	        variantId: "883360544250",
	        quantity:"1"
        });
        expect(response.body.error).toBe("This Item is already in your wishlist");
    });
    
    it("should change quantity of a item in the wishlist", async () => {
        const response = await request(app)
        .post("/wishlist/changeItemQuantity")
        .set("token", token)
        .send({
            productId: "86736845",
	        variantId: "883360544250",
	        quantity: "88"
        });
        expect(response.body.items[0].quantity).toBe(88);
    });

    it("should delete an item from the wishlist", async () => {
        const response = await request(app)
        .delete("/wishlist/removeItem")
        .set("token", token)
        .send({
            productId: "86736845",
	        variantId: "883360544250",
        });
        expect(response.body.status).toBe("Item removed from the wishlist");
    });

});