import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../axios/api";

export const usePeopleQuery = () => useQuery(["people"], fetchPeople);
