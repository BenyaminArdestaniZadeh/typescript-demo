"use client";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useSuperHerosData } from "../hooks/useSuperHerosData";
import Link from "next/link";

type RqProps = {
  name: string;
  id: number;
};

const RQHeros = () => {
  const { isLoading, data, refetch, isFetching } = useSuperHerosData();

  console.log("data", data?.data?.id);

  if (isLoading || isFetching) {
    return <Heading as="h4">Loading... </Heading>;
  }
  return (
    <Flex
      width={"100%"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      gap={"4"}
    >
      <Button
        size={"3"}
        style={{ width: "fit-content" }}
        onClick={() => refetch()}
      >
        Click here
      </Button>
      {data?.data?.map((item: RqProps, index: number) => (
        <Link href={`/super-hero/hero-detail-${item?.id}`} key={index}>
          <Heading as="h3">{item.name}</Heading>
        </Link>
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
