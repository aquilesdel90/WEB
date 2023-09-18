import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Skeleton } from '@chakra-ui/react';

import gunnylogo from '../assets/gunnylogo.png';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de una carga asincrónica, como cargar la imagen de fondo
    setTimeout(() => {
      setIsLoading(false); // Cambiar a false cuando la imagen se haya cargado
    }, 2000); // Simulación de 2 segundos de carga
  }, []);

  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      {isLoading ? (
        // Mostrar el Skeleton mientras se carga la imagen
        <Skeleton width="400px" height="150px" borderRadius="20px" />
      ) : (
        <Flex flexDirection="column" alignItems="center">
          {/* Utiliza gunnylogo como imagen */}
          <Image src={gunnylogo} alt="Gunny Logo" h={150} />
        </Flex>
      )}
    </Box>
  );
};

export default Header;
