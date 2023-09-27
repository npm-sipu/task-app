import { fetchProducts } from "../axios/api";
import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => useQuery(["products"], fetchProducts);
