import {
  searchCountryLessInfo,
  searchCountryLessInfoSimbol,
} from "../Services/buscaPais";

export const handleleSearchAction = async (search: string) => {
  const allCountry = await searchCountryLessInfo(search);
  const country = allCountry?.find((country) => {
    if (
      country.name.common?.toUpperCase() ||
      country.traslations["por"].common?.toUpperCase() === search.toUpperCase()
    ) {
      return country;
    } else {
      return [];
    }
  });
  console.log(country, "all");
  return country;
};

export const handleleClickAction = async (search: string) => {
  const allCountry = await searchCountryLessInfoSimbol(search);
  if (allCountry) {
    const country = allCountry?.find((coutry) => coutry);
    return country;
  }
};
