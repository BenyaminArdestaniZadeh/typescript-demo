"use client";
import CustomButton from "@/src/components/CustomButton";
import Header from "@/src/components/Header";
import RQHeros from "@/src/components/RQHeros";
import StateTest from "@/src/components/StateTest";
import { Flex } from "@radix-ui/themes";
import React from "react";

const names = [
  { first: "ben", last: "ardestani" },
  { first: "ben", last: "ardestani" },
  { first: "ben", last: "ardestani" },
  { first: "ben", last: "ardestani" },
];

const page = () => {
  return (
    <Flex
      width={"100%"}
      direction={"column"}
      style={{ backgroundColor: "#eee", height: "100vh" }}
    >
      <Header name={names} />
      <CustomButton
        handleClick={(event) => {
          console.log("button clicked", event);
        }}
      />
      <StateTest />
      <RQHeros />
    </Flex>
  );
};

export default page;
