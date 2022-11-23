const getAllCountries = require("../lambdas/get-all-countries");

describe("getAllCountries", () => {
  it("should return 200", async () => {
    const response = await getAllCountries.getAllCountries();
    expect(response.statusCode).toBe(200);
  });
});
