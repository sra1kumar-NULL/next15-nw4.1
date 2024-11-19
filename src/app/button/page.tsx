import React from "react";
import {
  ButtonGroup,
  Button,
  ButtonText,
  ButtonIcon,
} from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { LogOut } from "@/components/ui/icon";
const ButtonDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <ButtonGroup className="flex flex-col">
        <Button className="gap-2">
          <ButtonText>Log Out</ButtonText>
          <ButtonIcon as={LogOut} />
        </Button>
        <Button className="gap-2" variant="outline">
          <ButtonText>Log Out</ButtonText>
          <ButtonIcon as={LogOut} />
        </Button>
        <Button className="gap-2" variant="link">
          <ButtonText>Log Out</ButtonText>
          <ButtonIcon as={LogOut} />
        </Button>
      </ButtonGroup>
    </Center>
  );
};

export default ButtonDemo;
