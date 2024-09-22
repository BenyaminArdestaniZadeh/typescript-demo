"use client";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useSuperHerosData } from "../hooks/useSuperHerosData";

const RQHeros = () => {
  const { isLoading, data, refetch, isFetching } = useSuperHerosData();

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
      {data?.map((item: string, index: number) => (
        <Heading as="h3" key={index}>
          {item}
        </Heading>
      ))}
    </Flex>
  );
};

export default RQHeros;

// useQuery({
//   queryKey: ["SuperHero"],
//   queryFn: () => axios.get("http://localhost:4000/superheroes"),
//   enabled: false,
//   select: (data) => {
//     const superHeroNames = data?.data.map((hero: RqProps) => hero.name);
//     return superHeroNames;
//   },
// });

// "super-Heros", () => {
//     return axios.get("http://localhost:4000/superHeroes");
//   }

//   const [data, setData] = useState();
//   useEffect(() => {
//     axios.get("http://localhost:4000/superheroes").then((res) => {
//       setData(res.data);
//     });
//   }, []);
