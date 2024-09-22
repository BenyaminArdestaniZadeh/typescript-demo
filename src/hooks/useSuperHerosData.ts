"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type RqProps = {
  name: string;
};

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHerosData = () => {
  return useQuery({
    queryKey: ["SuperHero"],
    queryFn: () => fetchSuperHeros(),
    enabled: false,
    select: (data) => {
      const superHeroNames = data?.data.map((hero: RqProps) => hero.name);
      return superHeroNames;
    },
  });
};
