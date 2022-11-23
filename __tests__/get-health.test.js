const { getHealth } = require("../src/lambdas/get-health");

describe("getHealth", () => {
  it("should return 200 if the api is running", async () => {
    const response = await getHealth();
    expect(response.statusCode).toBe(200);
  });
});
