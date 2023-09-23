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
      cca2: newData.cca2,
    };
  });
  return newData;
};

export const changePositionArray = (
  historic: ICountryLocation[],
  contryName: string
) => {
  console.log(historic, "historic");
  console.log(contryName, "aaa");
  const [country] = historic.filter(
    (contry) =>
      contry.name.common
        ?.toLocaleLowerCase()
        .includes(contryName.toLocaleLowerCase()) ||
      contry.cca2?.toLocaleLowerCase().includes(contryName.toLocaleLowerCase())
  );
  console.log(country, "pais");
  if (country) {
    const countrylist = historic.filter(
      (contry) =>
        contry.name.common.toLocaleLowerCase() !==
          contryName.toLocaleLowerCase() &&
        contry.cca2?.toLocaleLowerCase() !== contryName.toLocaleLowerCase()
    );
    console.log(countrylist);
    return [...countrylist, country];
  } else {
    return false;
  }
};
