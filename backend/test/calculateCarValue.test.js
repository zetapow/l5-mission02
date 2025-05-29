const request = require("supertest");
const app = require("../server"); 

describe("API 2 - Claim History", () => {
  test("TC1: Valid input - Low Risk", async () => {
    const res = await request(app)
      .post("/api/claim-history")
      .send({ numberOfClaims: 0, yearsInsured: 5 });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("riskLevel");
    expect(["Low", "Medium", "High"]).toContain(res.body.riskLevel);
  });

  test("TC2: Valid input - Medium Risk", async () => {
    const res = await request(app)
      .post("/api/claim-history")
      .send({ numberOfClaims: 2, yearsInsured: 5 });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("riskLevel");
  });

  test("TC3: Valid input - High Risk", async () => {
    const res = await request(app)
      .post("/api/claim-history")
      .send({ numberOfClaims: 4, yearsInsured: 5 });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("riskLevel");
  });

  test("TC4: Claims exceed years insured", async () => {
    const res = await request(app)
      .post("/api/claim-history")
      .send({ numberOfClaims: 6, yearsInsured: 3 });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("TC5: Negative number of claims", async () => {
    const res = await request(app)
      .post("/api/claim-history")
      .send({ numberOfClaims: -1, yearsInsured: 5 });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("TC6: Non-integer input", async () => {
    const res = await request(app)
      .post("/api/claim-history")
      .send({ numberOfClaims: 1.5, yearsInsured: 5 });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("TC7: Missing fields", async () => {
    const res = await request(app)
      .post("/api/claim-history")
      .send({ numberOfClaims: 2 });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});