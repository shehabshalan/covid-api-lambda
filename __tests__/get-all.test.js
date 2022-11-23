const { getAll } = require("../src/lambdas/get-all");

describe("getAll", () => {
  it("should return 200", async () => {
    const response = await getAll();
    expect(response.statusCode).toBe(200);
  });
});
