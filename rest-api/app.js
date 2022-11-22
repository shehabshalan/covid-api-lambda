const axios = require("axios");
const url = "https://disease.sh/v3/covid-19";
let response;

exports.getAllCovidInformation = async (event, context) => {
  try {
    const result = await axios.get(`${url}/all`);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        data: result.data,
      }),
    };
  } catch (err) {
    response = {
      statusCode: 500,
      body: JSON.stringify({
        status: "error",
        message: err.message,
      }),
    };

    return response;
  }

  return response;
};
