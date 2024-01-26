import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import CircleImage from "./CircleImage";
import { B1 } from "../assets/images";

const ReadyRamdanSec = () => {
  const data = [
    {
      image: B1,
      name: "Beauty Sale",
    },
    {
      image: B1,
      name: "Beauty Sale",
    },
    {
      image: B1,
      name: "Beauty Sale",
    },
    {
      image: B1,
      name: "Beauty Sale",
    },
    {
      image: B1,
      name: "Beauty Sale",
    },
    {
      image: B1,
      name: "Beauty Sale",
    },
    {
      image: B1,
      name: "Beauty Sale",
    },
  ];
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  return (
    <Box bg={bgColor}>
      <Text fontSize={"20px"} fontWeight={"bold"} p={3} >Get ready for ramadan</Text>
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "flex-start" }}
      flexWrap={"wrap"}
      justify="space-between"
      color="#42484F"
      py={{ base: 10, md: 4 }}
      px={{ base: 4, md: 10 }}
      width={"100%"}
      gap={"20px"}
    >
      {data?.map((x)=><CircleImage
        src={x?.image} key={x?.image}
        alt="Image Alt Text"
        size="150px"
        name={x?.name}
        textAlign={"left"}
        Boxstyles={{ borderTopLeftRadius:"90px",borderTopRightRadius:"90px"}}
      />
      )}
    </Flex>
    </Box>
  );
};

export default ReadyRamdanSec;
