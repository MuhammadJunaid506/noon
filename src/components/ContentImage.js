import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, useTheme } from '@chakra-ui/react';
import { FaLongArrowAltRight } from "react-icons/fa";

const ContentImage = ({ title, description, buttonText, imageUrl, imageOnLeft , firstText }) => {
  const flexDirection = imageOnLeft ? 'row' : 'row-reverse';
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];

  return (
    <Flex
      direction={{ base: 'column', md: flexDirection }}
      align={{ base: 'center', md: 'flex-start' }}
      justify="space-between"  
      p={8}
      m={5}
      color="black"
    >
      <Box maxW={{ base: '100%', md: '50%' }} mb={{ base: 8, md: 0 }} w="100%"> 
        {imageUrl && (
          <Image src={imageUrl} alt="Image" borderRadius="md" w="100%" maxHeight="600px" />
        )}
      </Box>
      <Box maxW={{ base: '100%', md: '50%' }} w="100%" p={8} mt="8">
      <Text fontSize={{ base: 'md', md: 'lg' }} mb="6">
            {firstText ? firstText : ""}
          </Text> 
        <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} mb="4">
          {title}
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} mb="6">
          {description}
        </Text>
        <Button w={60} p={6} bg={bgColor} colorScheme={"while"}>
          <Text mr={2}>{buttonText}</Text><FaLongArrowAltRight /></Button>
      </Box>
    </Flex>
  );
};

export default ContentImage;
