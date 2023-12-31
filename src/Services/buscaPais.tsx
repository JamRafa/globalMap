import Api from ".";
import { ICountryData } from "../Interfaces/countryData";
import { FormatReqData } from "../Utils/formatData";

const searchCountry = async (countryName: string) => {
  try {
    const response = await Api.get(`name/${countryName}`);
    const data: ICountryData[] = response.data;
    return data;
  } catch (err) {
    console.log(err);
    throw err; // Rejeite a Promise em caso de erro
  }
};

const searchCountryLessInfo = async (countryName: string) => {
  try {
    const response = await Api.get(`name/${countryName}`);
    const data: ICountryData[] = response.data;
    if (!data || data.length === 0) {
      return [];
    }
    return FormatReqData(data);
  } catch (err) {
    console.log(err);
    return alert("Research did not found a country");
  }
};

const searchCountryLessInfoSimbol = async(countrySimbol: string) => {
  try {
    const response = await Api.get(`alpha/${countrySimbol}`);
    console.log(response.data)
    const data: ICountryData[] = response.data;
    if (!data || data.length === 0) {
      return;
    }
    return FormatReqData(data);
  } catch (err) {
  }
}

export { searchCountry, searchCountryLessInfo, searchCountryLessInfoSimbol };


