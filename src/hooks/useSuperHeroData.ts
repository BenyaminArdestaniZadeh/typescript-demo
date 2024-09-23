"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = (heroId: string) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId: string) => {
  return useQuery({
    queryKey: [heroId, "super-hero"],
    queryFn: () => fetchSuperHero(heroId),
  });
};
