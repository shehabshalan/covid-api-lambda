const https = require("https");

const url = "https://disease.sh/v3/covid-19";

function get(path) {
  return new Promise((resolve, reject) => {
    const req = https.get(url + path, (res) => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", () => {
        body = JSON.parse(body);
        resolve(body);
      });
    });
    req.on("error", (e) => {
      reject(e.message);
    });
  });
}

module.exports = {
  get,
};
