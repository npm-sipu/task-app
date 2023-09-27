import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../axios/api";

export const useBooksQuery = () => useQuery(["books"], fetchBooks);
