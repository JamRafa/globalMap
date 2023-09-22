import { createSlice } from "@reduxjs/toolkit";
import { ICountryLocation } from "./../../Interfaces/countryData";

const initialState = [{
  name: {
    common: ''
  },
  position: {
    lat: -10,
    lng: -55
  }
}] as ICountryLocation[];

const countrySlice = createSlice({
  name: "SearchCountry",
  initialState,
  reducers: {
    saveCountry: (state, { payload }) => {
      return [...state, payload]
    },
    resetCountry: () => initialState,
    newArray: (state, {payload}) =>payload
  },
});

export const { saveCountry, resetCountry, newArray } = countrySlice.actions;
export default countrySlice.reducer;
