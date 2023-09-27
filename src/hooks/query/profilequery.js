import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../axios/api";

export const useProfileQuery = () => useQuery(["profile"], fetchProfile);
