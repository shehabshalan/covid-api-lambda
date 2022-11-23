const getByCountry = require("../lambdas/get-by-country");

describe("getByCountry", () => {
  describe("when country is valid", () => {
    it("should return 200", async () => {
      const event = {
        pathParameters: {
          country: "yemen",
        },
      };
      const response = await getByCountry.getByCountry(event);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("when country is invalid", () => {
    it("should return 404", async () => {
      const event = {
        pathParameters: {
          country: "invalid-country",
        },
      };
      const response = await getByCountry.getByCountry(event);
      expect(response.statusCode).toBe(404);
    });
  });
});
