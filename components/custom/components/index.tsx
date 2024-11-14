"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
// import { SafeAreaView } from "react-native-safe-area-context";
import { componentsList } from "./utils/list";
import { ScrollView } from "@/components/ui/scroll-view";
import { Grid, GridItem } from "@/components/ui/grid";
import { Box } from "@/components/ui/box";
import ExpoImage from "next/image";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
// import { cssInterop } from "nativewind";
// import { ColorModeContext } from "./layout";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { ChevronRightIcon, Icon } from "@/components/ui/icon";

// cssInterop(SafeAreaView, { className: "style" });
// cssInterop(ExpoImage, { className: "style" });

const ComponentCard = ({ component, onPress, colorMode }: any) => {
  //   const { colorMode }: any = useContext(ColorModeContext);
  return (
    <Pressable
      className={`flex-1 rounded-xl bg-background-0 w-full h-full sm:gap-2 gap-1 flex flex-col lg:p-4 ${
        colorMode === "light"
          ? "lg:shadow-[0px_0px_4.374px_0px_rgba(38,38,38,0.10)] data-[hover=true]:lg:border data-[hover=true]:border-outline-100"
          : "lg:shadow-soft-1 lg:border border-outline-50 data-[hover=true]:border-outline-200"
      }`}
      onPress={onPress}
    >
      <Box className="flex-1 rounded-lg bg-background-50 px-3 lg:px-6 py-[14px] lg:py-7 aspect-[17/12]">
        <ExpoImage
          src={colorMode === "light" ? component.url : component.darkUrl}
          alt={component.title}
          className={`flex-1 rounded lg:rounded-md shadow-[0px_0px_1.998px_0px_rgba(38,38,38,0.10)]`}
          fill
          style={{
            objectFit: "contain",
          }}
          sizes="100vw"
        />
      </Box>
      <HStack className="justify-between px-1.5 mt-1">
        <Text className="text-typography-900 font-medium sm:text-base text-sm lg:text-xl">
          {component.title}
        </Text>
        <Icon
          as={ChevronRightIcon}
          size="sm"
          className="text-background-400 lg:hidden"
        />
      </HStack>
    </Pressable>
  );
};

const Header = ({ colorMode }: any) => {
  //   const { colorMode }: any = useContext(ColorModeContext);
  return (
    <HStack className="flex-1 max-w-[1730px] w-full mx-auto justify-between">
      <VStack className="w-full md:max-w-[630px] lg:max-w-[400px] xl:max-w-[480px] mx-5 md:ml-8 mb-8 mt-10 lg:my-[44px] xl:ml-[80px] flex-1">
        <HStack
          className="rounded-full bg-background-0 py-4 px-5 mb-7 md:mb-9 lg:mb-[80px] xl:mb-[132px] items-center native:max-w-[250px] w-fit"
          space="sm"
        >
          <ExpoImage
            src={
              colorMode === "light"
                ? "https://i.imgur.com/9bvua6C.png"
                : "https://i.imgur.com/EUqtUMu.png"
            }
            alt="logo_image"
            width={100}
            height={100}
            className="h-5 w-5 rounded-sm lg:h-6 lg:w-6 xl:h-7 xl:w-7"
          />
          <Text className="font-medium text-sm lg:text-base xl:text-lg text-typography-900">
            Powered by gluestack-ui v2
          </Text>
        </HStack>
        <Heading className="mb-2 xl:mb-[18px] text-4xl lg:text-5xl xl:text-[56px]">
          Kitchensink app
        </Heading>
        <Text className="text-sm lg:text-base xl:text-lg">
          KitchenSink is a comprehensive demo app showcasing all the NativeBase
          components in action. It includes buttons, forms, icons and much more!
        </Text>
      </VStack>
      <VStack className="hidden lg:flex flex-1 max-h-[510px] h-full aspect-[1075/510]">
        <ExpoImage
          src={
            colorMode === "light"
              ? "https://i.imgur.com/sxY9qxx.png"
              : "https://i.imgur.com/icZHMep.png"
          }
          alt="header_image"
          className="flex-1"
          fill
          style={{
            objectFit:'contain'
          }}
          sizes="100vw"
        />
      </VStack>
    </HStack>
  );
};

export const HomeScreen = ({ colorMode }: any) => {
  const router = useRouter();

  return (
    // <SafeAreaView className="flex-1 bg-background-50 relative">
    <ScrollView className="flex-1">
      <Box className="bg-background-50 flex-1">
        <Header colorMode={colorMode} />
      </Box>
      <Box className="bg-background-0">
        <Grid
          className="gap-x-3 gap-y-4 md:gap-x-4 lg:gap-x-7 lg:gap-y-8 py-6 px-5 md:px-8 md:pt-9 xl:pt-[90px] lg:pt-[70px] lg:px-[70px] xl:px-[100px] max-w-[1730px] mx-auto"
          _extra={{
            className: "grid-cols-2 md:grid-cols-3",
          }}
        >
          {componentsList.map((component, index) => (
            <GridItem key={index} _extra={{ className: "col-span-1" }}>
              <ComponentCard
                component={component}
                //@ts-ignore
                onPress={() => {
                  console.log(component.link);
                  router.push(component.link);
                }}
                colorMode={colorMode}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </ScrollView>
    // </SafeAreaView>
  );
};
