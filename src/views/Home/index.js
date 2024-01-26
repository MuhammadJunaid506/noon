
import { Image, Text, Box , Heading ,Button, useTheme , Flex} from '@chakra-ui/react';
import { B1, Banner, B4 ,Logo ,B2,B3, B5, B6, B7, B8 } from '../../assets/images';
import { FaLongArrowAltRight } from "react-icons/fa";

import CustomBanner from '../../components/CustomBanner';
import ProductCard from '../../components/ProductCard';
import ReadyRamdanSec from '../../components/ReadyRamdanSec';
import CicleLogos from '../../components/CicleLogos';
import CardSection from '../../components/CardSection';
import BoxImages from '../../components/BoxImages';
import Nav from '../../components/Nav';

const Home = () => {
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  const bannerStyle = {
    backgroundImage: `url(${B2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity:"0.9"
  };
  return (
    <>
    <Nav/>
    <CicleLogos/>
    <CardSection/>
    <CardSection text={"Limited time toy deals"} bg={"white"}/>
    <CustomBanner imageUrl={B6} />
    <ReadyRamdanSec/>
    <CardSection text={"Limited time toy deals"} bg={"white"}/>
    <BoxImages text={"Limited time toy deals"} bg={"white"}/>
    <BoxImages text={"Limited time toy deals"} bg={"white"}/>
    <BoxImages text={"Limited time toy deals"} bg={"white"}/>
    <BoxImages text={"Limited time toy deals"} bg={"white"}/>
    </>
  )
}

export default Home
