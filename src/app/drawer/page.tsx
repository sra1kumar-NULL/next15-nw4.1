"use client";
import React from "react";
import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Platform } from "react-native";

const DrawerDemo = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <Center className="flex-1 bg-background-0 p-6">
      <Button
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonText>Show Drawer</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        size={Platform.OS === "web" ? "sm" : "lg"}
      >
        <DrawerBackdrop />
        <DrawerContent className="p-4 sm:p-6 native:pt-[56px]">
          <DrawerHeader>
            <Heading className="text-xl sm:text-3xl">Heading</Heading>
          </DrawerHeader>
          <DrawerBody className="mt-2 sm:mt-3">
            <Text className="text-typography-800 text-base sm:text-xl">
              This is a sentence.
            </Text>
          </DrawerBody>
          <DrawerFooter>
            <Button
              onPress={() => {
                setShowDrawer(false);
              }}
              className="flex-1"
            >
              <ButtonText>Button</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Center>
  );
};

export default DrawerDemo;
