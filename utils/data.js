import axios from "axios";

const url = process.env.COVIDAPI;

export const getAllData = async () => {
  try {
    const {
      data: {
        updated,
        cases,
        active,
        recovered,
        deaths,
        critical,
        todayCases,
        todayRecovered,
        todayDeaths,
        affectedCountries,
      },
    } = await axios.get(url + "/all");
    let result = {
      updated,
      cases,
      active,
      recovered,
      deaths,
      critical,
      todayCases,
      todayRecovered,
      todayDeaths,
      affectedCountries,
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCountry = async () => {
  try {
    const data = await axios.get(url + "/countries");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountry = async (country) => {
  try {
    const data = await axios.get(url + "/countries/" + country);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHistoricalData = async () => {
  try {
    const data = await axios.get(url + "/historical/all?lastdays=all");

    const modifiedData = {
      cases: Object.values(data.data.cases),
      deaths: Object.values(data.data.deaths),
      recovered: Object.values(data.data.recovered),
      labels: Object.keys(data.data.cases),
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const getLocations = async () => {
  try {
    const { data } = await axios.get(
      url + "/countries?yesterday=false&twoDaysAgo=false&allowNull=false",
    );

    const modifiedData = data.map((locationData) => ({
      country: locationData.country,
      updated: locationData.updated,
      flag: locationData.countryInfo.flag,
      coordinate: [locationData.countryInfo.long, locationData.countryInfo.lat],
      cases: locationData.cases,
      deaths: locationData.deaths,
      recovered: locationData.recovered,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
