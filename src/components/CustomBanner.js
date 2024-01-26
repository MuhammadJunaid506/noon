import React from 'react';
import { Box, Flex, Heading, Text, Button, useTheme } from '@chakra-ui/react';
import { FaLongArrowAltRight } from "react-icons/fa";

const CustomBanner = (props) => {
  const bannerStyle = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];

  return (
    <Box
      style={bannerStyle}
      color="white"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 20 }}
      textAlign={{ base: 'center', md: 'left' }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify="space-between"
      >
        <Box maxW={{ base: '100%', md: '50%' }} mb={{ base: 8, md: 0 }} mt={8}>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb="6" mt={"4"}>
            {props?.firstText ? props?.firstText : ""}
          </Text>
          <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb="4">
            {props?.title ? props?.title: ""}
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb="6">
            {props?.description ? props?.description :""}
          </Text>
          {/* Conditionally render buttons based on props */}
          {props.showButtons === 'multiple' ? (
            <Flex>
          <Button w={60} p={6} mr={4} bg={bgColor} colorScheme={"while"}>
          <Text mr={2} fontStyle={"italic"}>{props?.buttonText1}</Text><FaLongArrowAltRight /></Button>
          <Button w={60} p={6} bg={bgColor} colorScheme={"while"}>
          <Text mr={2} fontStyle={"italic"}>{props?.buttonText2}</Text><FaLongArrowAltRight /></Button>
            </Flex>
          ) : props.showButtons === 'single' ? (
            <Button colorScheme="white" bg={bgColor}>{props?.buttonText}</Button>
          ) : null}
          {props?.children}
        </Box>
      </Flex>
    </Box>
  );
};

export default CustomBanner;
