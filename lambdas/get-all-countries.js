const apiHandler = require("apiHandler");

exports.getAllCountries = async (event, context) => {
  try {
    const response = await apiHandler.get("/countries");
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        result: response,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "error",
        message: err.message,
      }),
    };
  }
};
