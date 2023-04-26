const services = require("../services");

const getCountryData = async (req, res) => {
  const { country } = req.params;
  try {
    const data = await services.getCountryData(country);
    res.status(200).send(data);
  } catch (error) {
    res.status(error.status).send(error.error);
  }
};

module.exports = { getCountryData };
