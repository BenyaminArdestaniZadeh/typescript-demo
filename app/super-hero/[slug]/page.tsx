import { useSuperHeroData } from "@/src/hooks/useSuperHeroData";
import { Heading } from "@radix-ui/themes";
import React from "react";

export default function SuperHeroPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, isLoading, error } = useSuperHeroData(params.slug);
  console.log("data", data?.data);

  if (isLoading) {
    return <Heading as="h4">is Loading...</Heading>;
  }

  if (error) {
    return <Heading as="h4">{error.message}</Heading>;
  }

  return <div>{data?.data}</div>;
}
