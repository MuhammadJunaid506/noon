import React from "react";
import { Box, Button, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import CircleImage from "./CircleImage";
import { B1,B2,B3,B4,B5,B6,B7,B8} from "../assets/images";

const BoxImages = ({text}) => {
  const data = [
    {
      image: B1,
      name: "Beauty Sale",
    },
    {
      image: B3,
      name: "Beauty Sale",
    },
    {
      image: B3,
      name: "Beauty Sale",
    },
    {
      image: B4,
      name: "Beauty Sale",
    },
    {
      image: B5,
      name: "Beauty Sale",
    },
    {
      image: B1,
      name: "Beauty Sale",
    },
    {
      image: B3,
      name: "Beauty Sale",
    },
  ];

  return (
    <Box>
      <Text fontSize={"20px"} fontWeight={"bold"} p={3} >{text ? text :""}</Text>
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "flex-start" }}
      flexWrap={"wrap"}
      justify="space-between"
      color="black"
      px={{ base: 4, md: 10 }}
      width={"100%"}
      gap={"20px"}
    >
      {data?.map((logo, index) => (
        <CircleImage
          key={index}
          src={logo?.image}
          alt="Image Alt Text"
          size="150px"
          name={logo?.name}
          Boxstyles={{ borderRadius: "10px" }}
        />
      ))}
    </Flex>
    </Box>
  );
};

export default BoxImages;