import React from 'react'
import {Box,Heading,Flex, useTheme, Button , Text} from '@chakra-ui/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const ScrollerCard = (props) => {
    const flexDirection = props.imageOnLeft ? 'row-reverse' : "row" ;
    const theme = useTheme();
    const bgColor = theme.colors.brand[800];
  return (
    <>
    <Flex 
    direction={props.direction? flexDirection :"column"}    
    alignItems={"center"}
    borderWidth="1px"
    borderRadius="lg" 
    boxShadow="lg"
    bg={bgColor}
    color="white">
    <Box maxW={{ base: '100%', md: '100%' }} p={8} >
    <Flex align={"center"} direction={"column"} textAlign={"center"}>
      <Heading mt={2}fontSize="4xl" fontStyle={"italic"} color={"white"}  >
        Hear From Our Happy Customers
      </Heading>
      <Box p={8} width={{base:"200px", md:"350px"}} height={{base:"300px", md:"250px"}}><Scroller/></Box>
      <Button w={60} p={6} mt={{base:0, md:4}} bg={"black"} colorScheme={"while"}>
          <Text mr={2} fontStyle={"italic"}>READ MORE</Text><FaLongArrowAltRight />
      </Button>
      </Flex>
    </Box>
    </Flex>
    </>
  )
}

export default ScrollerCard


export const Scroller = () => {
  return (
    <Swiper
      navigation={true}
      className='mySwiper'
      modules={[Navigation,Autoplay,Pagination]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide >
        <Text>Top Notch customer service! These guys go beyond expectations! <br/>I highly recommend this shop.</Text>
      </SwiperSlide>
      <SwiperSlide >
        <Text>This place is AWESOME!! Great price. <br/> Service was the Best! They were so fast too! 😉</Text>
      </SwiperSlide>
      <SwiperSlide >
        <Text>I was referred to this place by my mechanic. I trust him and he refers all his clients to this station. I have taken both my car and my wife's car here. The service has been great. Very fast, straight forward, and reasonably priced. It took about fifteen minutes in and out. I highly recommend this place.</Text>
      </SwiperSlide>
      <SwiperSlide >
        <Text>Top Notch customer service! These guys go beyond expectations!</Text>
      </SwiperSlide>
    </Swiper>
  );
};
