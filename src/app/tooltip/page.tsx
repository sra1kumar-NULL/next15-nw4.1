"use client";
import React from "react";
import { Tooltip, TooltipContent, TooltipText } from "@/components/ui/tooltip";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Platform } from "react-native";

const DirectionalTooltip = ({ placement, IconComponent }: any) => {
  const [pressed, setPressed] = React.useState(false);
  const tooltipProps = Platform.OS !== "web" ? { isOpen: pressed } : {};
  return (
    <Tooltip
      placement={placement}
      // isOpen={pressed}
      {...tooltipProps}
      trigger={(triggerProps) => (
        <Button
          variant="link"
          {...triggerProps}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          className="h-fit"
        >
          <ButtonIcon as={IconComponent} size="sm" />
        </Button>
      )}
    >
      <TooltipContent>
        <TooltipText>Hello World!</TooltipText>
      </TooltipContent>
    </Tooltip>
  );
};

const TooltipDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <Center className="h-[175px] w-[175px] rounded-lg border border-outline-200 shadow-hard-5 p-2 flex flex-row items-center justify-center gap-3">
        <DirectionalTooltip placement="left" IconComponent={ChevronLeftIcon} />

        <VStack className="items-center justify-center gap-3 h-full">
          <DirectionalTooltip placement="top" IconComponent={ChevronUpIcon} />

          <Box className="bg-background-50 rounded-md p-2 items-center justify-center w-[90px] aspect-[1/1]">
            <Text size="xs" className="text-center">
              Hover over the arrows
            </Text>
          </Box>

          <DirectionalTooltip
            placement="bottom"
            IconComponent={ChevronDownIcon}
          />
        </VStack>

        <DirectionalTooltip
          placement="right"
          IconComponent={ChevronRightIcon}
        />
      </Center>
    </Center>
  );
};

export default TooltipDemo;
