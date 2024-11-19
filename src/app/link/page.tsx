import React from "react";
import { Link, LinkText } from "@/components/ui/link";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Twitter, Youtube } from "lucide-react";

const LinkDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <HStack className="gap-10 w-full max-w-[336px] p-6 bg-background-50 rounded-full justify-center">
        <Link
          href="https://x.com/gluestack"
          isExternal
          className="flex flex-row justify-center items-center gap-2"
        >
          <Icon
            size="xl"
            as={Twitter}
            className="text-info-800 fill-info-800"
          />
          <LinkText className="no-underline">Twitter</LinkText>
        </Link>
        <Link
          href="https://www.youtube.com/@GeekyAnts"
          isExternal
          className="flex flex-row justify-center items-center gap-2"
        >
          <Icon size="xl" as={Youtube} className="text-info-800" />
          <LinkText className="no-underline">Youtube</LinkText>
        </Link>
      </HStack>
    </Center>
  );
};

export default LinkDemo;
