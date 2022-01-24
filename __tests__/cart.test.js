const app = require("../src/app");
const request = require("supertest");

describe("Cart", () => {
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
    
    it("should add item to the cart", async () => {
        const response = await request(app)
        .post("/cart/addItem")
        .set("token", token)
        .send({
            productId: "86736845",
	        variantId: "883360544250",
	        quantity:"1"
        });
        expect(response.body).toHaveProperty("_id");
    }, 6000);

    it("should not add the same item to the cart", async () => {
        const response = await request(app)
        .post("/cart/addItem")
        .set("token", token)
        .send({
            productId: "86736845",
	        variantId: "883360544250",
	        quantity:"1"
        });
        expect(response.body.error).toBe("This Item is already in your cart");
    });

    it("should change quantity of a item in the cart", async () => {
        const response = await request(app)
        .post("/cart/changeItemQuantity")
        .set("token", token)
        .send({
            productId: "86736845",
	        variantId: "883360544250",
	        quantity: "366"
        });
        expect(response.body.items[0].quantity).toBe(366);
    });

    it("should delete an item from the cart", async () => {
        const response = await request(app)
        .delete("/cart/removeItem")
        .set("token", token)
        .send({
            productId: "86736845",
	        variantId: "883360544250",
        });
        expect(response.body.status).toBe("Item removed from the cart");
    });

});