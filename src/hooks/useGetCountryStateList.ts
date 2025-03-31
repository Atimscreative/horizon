import { useState, useEffect } from "react";
import { GetCountries, GetState } from "react-country-state-city";

export default function useGetCountryList(currentCountry: string) {
  const [countriesList, setCountriesList] = useState<any[]>([]);
  const [stateList, setStateList] = useState<any[]>([]);
  console.log(currentCountry, "useGet");

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  useEffect(() => {
    if (currentCountry)
      GetState(parseInt(currentCountry)).then((result) => {
        setStateList(result);
      });
  }, [currentCountry]);
  return { countries: countriesList, states: stateList };
}
