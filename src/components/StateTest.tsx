import { Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};

const StateTest = () => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  return (
    <Flex
      width={"100%"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      style={{ height: 300 }}
    >
      <Text as="p">user name is {user.name}</Text>
      <Text as="p">user email is {user.email}</Text>
    </Flex>
  );
};

export default StateTest;
