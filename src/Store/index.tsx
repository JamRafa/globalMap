import { configureStore } from "@reduxjs/toolkit";
import countrySlice from './reducers/SearchCountry'

const store = configureStore({
  reducer: {
    countryData: countrySlice
  },
});

export default store;