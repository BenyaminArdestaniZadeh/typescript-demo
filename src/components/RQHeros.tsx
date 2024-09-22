"use client";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

type RqProps = {
  name: string;
};

const RQHeros = () => {
  const { isLoading, data, refetch, isFetching } = useQuery({
    queryKey: ["SuperHero"],
    queryFn: () => axios.get("http://localhost:4000/superheroes"),
    enabled: false,
    select: (data) => {
      const superHeroNames = data?.data.map((hero: RqProps) => hero.name);
      return superHeroNames;
    },
  });
  
  console.log("data", data);

  if (isLoading || isFetching) {
    return <Heading as="h4">Loading... </Heading>;
  }
  return (
    <Flex
      width={"100%"}
      direction={"column"}
      gap={"4"}
      style={{ border: "3px solid red" }}
    >
      <Button onClick={() => refetch()}>Click here</Button>
      {data?.map((item: RqProps, index: number) => (
        <Heading key={index}>{item?.name}</Heading>
      ))}
    </Flex>
  );
};

export default RQHeros;

// "super-Heros", () => {
//     return axios.get("http://localhost:4000/superHeroes");
//   }

//   const [data, setData] = useState();
//   useEffect(() => {
//     axios.get("http://localhost:4000/superheroes").then((res) => {
//       setData(res.data);
//     });
//   }, []);
