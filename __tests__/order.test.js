const app = require("../src/app");
const request = require("supertest");
require("dotenv").config();

describe("Order", () => {
  var token = "";
  beforeAll(async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "example-test-03433@gmail.com",
      password: "123",
    });
    token = response.body.token;
  });

  it("should get orders from a user", async () => {
    const response = await request(app).get("/orders").set("token", token);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should create an order from a user", async () => {
    const response = await request(app)
      .post("/orders/create")
      .set("token", token)
      .send({
        address: "Address test",
        paymentId: "22222",
        items: [
          {
            variant: {
              variation_values: {
                size: "050",
              },
              price: 99.99,
              product_id: "061492183572",
              orderable: true,
            },
            _id: "5172d203ffdd81f3234d5f9b",
            productId: "TG508",
            quantity: "2",
          },
        ],
      });
      expect(response.body.status).toBe("created");
  });

  it("should checkout an order from a user", async () => {
    const response = await request(app)
      .get(`/checkout?amount=99.99&items=${encodeURIComponent(JSON.stringify({
        items: [
            {
              variant: {
                variation_values: {
                  size: "050",
                },
                price: 99.99,
                product_id: "061492183572",
                orderable: true,
              },
              _id: "5172d203ffdd81f3234d5f9b",
              productId: "TG508",
              quantity: "1",
            },
          ]
      }))}&token=${token}`)
      expect(response.statusCode).toBe(302);
  });
});
