const axios = require("axios");

const getCountryData = async (country) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );

    return { status: 200, data: response.data };
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        error: error.response.statusText,
      };
    } else {
      return { status: 500, error: "Error getting data" };
    }
  }
};

module.exports = { getCountryData };
