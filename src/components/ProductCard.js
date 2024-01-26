import React from 'react';
import { Box, Image, Text, Badge, Button, Flex } from '@chakra-ui/react';
import { B2, B6 } from '../assets/images';

const ProductCard = ({ imageSrc, title, rating, price, originalPrice, discount, soldRecently, express }) => {
  return (
    <Box
      maxW="200px"
      maxH="500px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      textAlign="center"
      bg={"white"}
    >
      <Box m="2" p="3" bg={"#F8F8F9"} borderRadius="lg">
      <Box bg={"white"} borderRadius={"full"} p={"10px"} mb={-5}  width={"40px"}>
          <Image src={B6} alt="Product Image" height={"25px"} width={"25px"}/>
          </Box>
      <Image src={imageSrc} alt="Product Image" height={"200px"} width={"200px"}/>
      <Flex justifyContent={"space-between"} m={2}>
          <Text fontSize="sm" color="gray.500">
            {rating} 
          </Text>
          <Box bg={"white"} borderRadius={"full"} p={"10px"} mt={-5}>
          <Image src={B6} alt="Product Image" height={"25px"} width={"25px"}/>
          </Box>
        </Flex>
      </Box>

      <Box p="4">

        {/* <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box> */}

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {title}
        </Box>
        <Flex mt="1" gap={"10px"}>
          <Text fontSize="xx-small" fontWeight="semibold">
            {price}
          </Text>
          <Text textDecoration="line-through" color="gray.600">
            {originalPrice}
          </Text>
          <Text color="teal.600" fontWeight="bold">
            {discount}
          </Text>
        </Flex>
        <Box mt="2" color="gray.600">
          {soldRecently} sold recently
        </Box>

        <Box mt="2" color="teal.600">
          {express}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
