import { Box, Button, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import CircleImage from "./CircleImage";
import { B1 , B6 } from "../assets/images";
import ProductCard from "./ProductCard";
import usePagination from "../Hook/usePagination";

const CardSection = ({text , bg}) => {
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
      const itemsPerPage = 6; 
      const { currentPage, totalPages, paginatedItems, nextPage, prevPage } = usePagination(
        data,
        itemsPerPage
      );
      const theme = useTheme();
      const bgColor = theme.colors.brand[700];
      return (
        <Box  bg={bg ? bg : bgColor}>
          <Text fontSize={"20px"} fontWeight={"bold"} p={3}>{text ? text :""}</Text>       
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          flexWrap={"wrap"}
          justify="space-between"
          color="#42484F"
          px={{ base: 4, md: 10 }}
          width={"100%"}
          gap={"20px"} 
         
        >
        {paginatedItems.map((product, index) => (
        <ProductCard
          key={index}
          imageSrc={product?.image}
          title={product?.name} 
          rating="4.4"
          reviews="218"
          price="AED 1,610"
          originalPrice="AED 2,999"
          discount="46% off"
          soldRecently="470+"
          express="noon-express"
        />
      ))}
        <Box bg={"white"} borderRadius={"full"} p={"10px"} position={"absolute"}>
        <Button onClick={prevPage} disabled={currentPage === totalPages}>
          <Image src={B6} alt="Product Image" height={"25px"} width={"25px"}/>
        </Button>
          </Box>
          <Box bg={"white"} borderRadius={"full"} p={"10px"} position={"absolute"}>
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          <Image src={B6} alt="Product Image" height={"25px"} width={"25px"}/>
        </Button>
          </Box>
    </Flex>
    </Box>
)};

export default CardSection;
