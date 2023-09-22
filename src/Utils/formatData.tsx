import { ICountryData, ICountryLocation } from "../Interfaces/countryData";

export const FormatReqData = (data: ICountryData[]) => {
  const newData = data.map((newData) => {
    return {
      name: newData.name,
      position: {
        lat: newData.latlng[0],
        lng: newData.latlng[1],
      },
      flag: newData.flags,
      languages: newData.languages,
      capital: newData.capital,
      region: newData.region,
      coatOfArms: newData.coatOfArms,
      currencies: newData.currencies,
      traslations: newData.translations,
      population: newData.population,
    };
  });
  return newData;
};

export const changePositionArray = (
  historic: ICountryLocation[],
  contryName?: string
) => {
  const [country] = historic.filter(
    (contry) =>
      contry.name.common?.toLocaleLowerCase() ===
      contryName?.toLocaleLowerCase()
  );
  if (country) {
    const countrylist = historic.filter(
      (contry) => contry.name.common !== contryName
    );
    return [...countrylist, country];
  } else {
    return false;
  }
};
