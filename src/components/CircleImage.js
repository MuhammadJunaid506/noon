// CircularImage.js
import React from 'react';
import { Box, Image, Text, useStyleConfig } from '@chakra-ui/react';

const CircleImage = ({ src, alt, size, name , textAlign, Boxstyles}) => {
  const styles = useStyleConfig('CircularImage');

  return (
    <>
    <Box textAlign={textAlign ? textAlign :"center"} width={size}  >
      <Box {...styles} width={size} height={size} {...Boxstyles}>
        <Image src={src} alt={alt} sx={styles.iconStyle} />
      </Box>
      <Text fontWeight={"bold"} pt={2}>{name}</Text>
    </Box>
    </>
  );
};

export default CircleImage;
