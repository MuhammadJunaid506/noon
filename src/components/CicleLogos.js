import React from "react";
import { Box, Button, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import CircleImage from "./CircleImage";
import { B1 ,B6} from "../assets/images";
import usePagination from "../Hook/usePagination";

const CicleLogos = () => {
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
  const itemsPerPage = 12;
  const { currentPage, totalPages, paginatedItems, nextPage, prevPage } = usePagination(
    data,
    itemsPerPage
  );
  console.log(paginatedItems)

  const theme = useTheme();
  const bgColor = theme.colors.brand[900];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "flex-start" }}
      flexWrap={"wrap"}
      justify="space-between"
      color="black"
      bg={bgColor}
      px={{ base: 4, md: 10 }}
      width={"100%"}
      gap={"20px"}
    >
      {paginatedItems.map((logo, index) => (
        <CircleImage
          key={index}
          src={logo?.image}
          alt="Image Alt Text"
          size="80px"
          name={logo?.name}
          Boxstyles={{ borderRadius: "full" }}
        />
      ))}
        <Box bg={"white"} borderRadius={"full"} p={"10px"} position={"absolute"} >
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          <Image src={B6} alt="Product Image" height={"25px"} width={"25px"}/>
        </Button>
          </Box>
          <Box bg={"white"} borderRadius={"full"} p={"10px"} position={"absolute"} >
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          <Image src={B6} alt="Product Image" height={"25px"} width={"25px"}/>
        </Button>
          </Box>
    </Flex>
  );
};

export default CicleLogos;