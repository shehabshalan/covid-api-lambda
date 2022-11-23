const apiHandler = require("apiHandler");

exports.getByCountry = async (event, context) => {
  const country = event.pathParameters.country;

  try {
    const response = await apiHandler.get(`/countries/${country}`);
    if (response.message) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          status: "error",
          message: response.message,
        }),
      };
    }
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
