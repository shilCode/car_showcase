import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "5cfc73e0d7msh22d711498304c22p190909jsnff1997ccba02",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}

export const calculateRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; //base price in PLN
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  //Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  //Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

//TODO: API down below does not work and I cannot find a free API
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getImages");

  const { make, year, model } = car;
  url.searchParams.append("customer", "");
  url.searchParams.append("Make_ID", make);
  url.searchParams.append("Model_ID", `${year}`);
  url.searchParams.append("Model_Name", model);
  url.searchParams.append("Model_Name", `${angle}`);

  return `${url}`;
};
