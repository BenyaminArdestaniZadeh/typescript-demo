import { Button } from "@radix-ui/themes";
import React from "react";

type Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomButton = (props: Props) => {
  return (
    <Button mt={"4"} onClick={props.handleClick}>
      Click me
    </Button>
  );
};

export default CustomButton;
