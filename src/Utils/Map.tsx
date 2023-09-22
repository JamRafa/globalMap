import { fromLatLng, setKey } from "react-geocode";
import { handleleClickAction } from "./Search";
import { IAllPossibleCountryData } from "../Interfaces/countryData";

export const handleMapClick = async (e: google.maps.MapMouseEvent) => {
  const lat = e.latLng?.lat();
  const lng = e.latLng?.lng();
  setKey("AIzaSyAgQV7c26ug4xIGFozFN3xYk6RRwCK46u4");
  if (lat && lng) {
    try {
      const response = await fromLatLng(lat, lng);
      const results = response.results;
      if (results.length > 0) {
        let countryFound = false;
        let countryNameSybol = "";

        results.forEach((res: IAllPossibleCountryData) => {
          if (countryFound) {
            return;
          }

          const a = res.address_components;
          a.forEach((country) => {
            if (countryFound) {
              return;
            }

            if (country.types?.includes("country")) {
              const countryName = country.short_name;
              countryFound = true;
              countryNameSybol = countryName;
            }
          });
        });

        return handleleClickAction(countryNameSybol);
      } else {
        console.log("Nenhum resultado encontrado.");
      }
    } catch (error) {
      console.error("Erro na geocodificação reversa:", error);
    }
  }
};
