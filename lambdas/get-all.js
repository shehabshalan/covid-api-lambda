const { get } = require("./http");

exports.getAll = async (event, context) => {
  try {
    const response = await get("/all");
    const { cases, todayCases, deaths, todayDeaths } = response;
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        result: {
          cases,
          todayCases,
          deaths,
          todayDeaths,
        },
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
