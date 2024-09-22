import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";

type Props = {
  name: { first: string; last: string }[];
  
};

const Header = (props: Props) => {
  return (
    <Flex
      width={"100%"}
      direction={"column"}
      justify={"center"}
      align={"center"}
      mt={"2"}
    >
      {props.name.map((item, index) => (
        <Heading key={index} as="h1">
          {item.first} {item.last}
        </Heading>
      ))}
    </Flex>
  );
};

export default Header;
