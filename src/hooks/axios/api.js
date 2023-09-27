import axios from "axios";

let URL = "https://fakerapi.it/api/v1/";

const instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchBooks = async () => {
  const response = await axios.get(`${URL}books?_quantity=10`);
  return response.data;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${URL}products?_quantity=10&_taxes
    =12&_categories_type=uuid`);
  return response.data;
};

export const fetchCompanies = async () => {
  const response = await axios.get(`${URL}companies?_quantity=10`);
  return response.data;
};

export const fetchPeople = async () => {
  const response = await axios.get(`${URL}users?_quantity=20&_gender=male`);
  return response.data;
};

export const fetchProfile = async () => {
  const response =
    await axios.get(`${URL}persons?_quantity=1&_gender=male&_birthday_star
  t=2005-01-01`);
  return response.data;
};

export default instance;
