import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Textarea,
  FormControl,
  Image,
  Button,
  Flex, useTheme , useToast
} from '@chakra-ui/react';
import {firestore} from "../Functions/Firebase"
import { addDoc , collection } from 'firebase/firestore';
import {toastSuccess, toastError} from '../helpers/toast'
import { Logo } from '../assets/images';

const ContactForm = (props) => {
  const toast = useToast()
  const bannerStyle = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const ref = collection(firestore, "formSubmissions")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addDoc(ref, {...formData,timestamp: new Date()})

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      toast(toastSuccess('Form Submit successful!'));
    } catch (error) {
      toast(toastError('Form submission failed.'))
    }
  };

  return (
    <Box style={props?.imageUrl ? bannerStyle : null} mt={props?.imageUrl? -20 :0} ml={{ base: props?.imageUrl? 8 :0, md: props?.imageUrl? -20 :0}} mr={props?.imageUrl? 5: 0}>
    <Flex direction={"column"} textAlign={props?.imageUrl ? "left" :"center"}
    align={props?.imageUrl ? "left" :"center"}
    justify="space-between"  
    p={10}
    m={props?.imageUrl? 0 : 5}
    // borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    color="black"
    bg={props?.imageUrl ? "transparent" : "white"}
    > 
     <Flex gap={3} align={"center"}>
      {!props?.imageUrl && <>
      <Heading mb={4} fontSize="2xl" fontStyle={"italic"} color={props?.imageUrl ? bgColor : "black"} >
        Send Us A Message 
      </Heading>
      <Heading color='gray.500' fontSize="1xl" fontStyle={"italic"}>-OR-</Heading></>}
      </Flex> 
      {props?.imageUrl &&<Box><Image src={Logo} alt={""} h={59} w={150} mb={5}/></Box>}
      <Heading fontSize="3xl" fontStyle={"italic"} color="white">
         {props?.imageUrl ? "Let's Get In Touch!" : "Request A Free Quote!"}
      </Heading>
      {props?.imageUrl && <Heading mt={4} fontSize={18} color="white" >
      For more information or to contact us, call us at <br/> <strong color={bgColor}>(909) 499-9590</strong> or fill out the form below. Thank you! 
      </Heading>}
      <Flex direction={"column"} alignItems={"center"}>
      <form onSubmit={handleSubmit}>
        <Flex gap={3} mt={5}>
        <FormControl bg={props?.imageUrl ? "white":"gray.300"}>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name:"
            value={formData.name}
            onChange={handleChange}
            isRequired
          />
        </FormControl>
        <FormControl bg={props?.imageUrl ? "white":"gray.300"}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            isRequired
          />
        </FormControl>
        <FormControl bg={props?.imageUrl ? "white":"gray.300"}>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone:"
            value={formData.phone}
            onChange={handleChange}
            isRequired
          />
        </FormControl>
        </Flex>
        <FormControl bg={props?.imageUrl ? "white":"gray.300"} mt={5} mb={5}>
          <Textarea
            id="message"
            name="message"
            placeholder="Message:"
            value={formData.message}
            onChange={handleChange}
            isRequired
          />
        </FormControl>
        {/* <FormControl mb={4}>
          <FormLabel htmlFor="captcha">I'm not a robot:</FormLabel>
          <Input type="text" id="captcha" name="captcha" isRequired />
        </FormControl> */}
        <Button type="submit" w={60} p={6} bg={bgColor} colorScheme={"while"} fontStyle={"italic"}>Submit</Button>
      </form>
      </Flex>
    </Flex>
    </Box>
  );
};

export default ContactForm;
