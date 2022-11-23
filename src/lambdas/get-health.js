exports.getHealth = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      message: "API is up and running",
    }),
  };
  return response;
};
