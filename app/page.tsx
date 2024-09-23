import RQHeros from "@/src/components/RQHeros";
import { Flex } from "@radix-ui/themes";
import React from "react";

const page = () => {
  return (
    <Flex
      width={"100%"}
      direction={"column"}
      justify={"center"}
      align={"center"}
      style={{ backgroundColor: "#eee", height: "100vh" }}
    >
      <RQHeros />
    </Flex>
  );
};

export default page;
