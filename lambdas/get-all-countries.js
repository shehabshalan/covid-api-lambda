const { get } = require("./http");

exports.getAllCountries = async (event, context) => {
  try {
    response = await get("/countries");
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
