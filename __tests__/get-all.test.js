const getAll = require("../lambdas/get-all");

describe("getAll", () => {
  it("should return 200", async () => {
    const response = await getAll.getAll();
    expect(response.statusCode).toBe(200);
  });
});
