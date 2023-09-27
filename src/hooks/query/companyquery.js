import { useQuery } from "@tanstack/react-query";
import { fetchCompanies } from "../axios/api";

export const useCompanyQuery = () => useQuery(["companies"], fetchCompanies);
