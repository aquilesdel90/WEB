import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useMediaQuery,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Importar motion desde framer-motion
import inugicard1 from '../assets/inugicard1.png';
import inugicard2 from '../assets/inugicard2.png';
import inugicard3 from '../assets/inugicard3.png';
import inugicard4 from '../assets/inugicard4.png';
import paper from '../assets/paper.png';
import { useEffect, useRef, useState } from 'react';

const cardStyles = {
  backgroundImage: `url(${paper})`,
  backgroundSize: '100% 100%', // Ajusta el tamaño del fondo al 100% de ancho y 100% de alto
  backgroundRepeat: 'no-repeat',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const cards = [
  {
    title: 'Title 1',
    text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
    imageSrc: inugicard1,
  },
  {
    title: 'Title 2',
    text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
    imageSrc: inugicard2,
  },
  {
    title: 'Title 3',
    text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
    imageSrc: inugicard3,
  },
  {
    title: 'Title 4',
    text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
    imageSrc: inugicard4,
  },
];

const Narrative = () => {
  const [animate, setAnimate] = useState(false);
  const boxRef = useRef(null);
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // Esta función animará las tarjetas al cargar la sección
    setAnimate(true);
  }, []);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" p={10}>
      <SimpleGrid
        columns={isMobile ? 2 : 4} // Establece 1 columna en dispositivos móviles y 2 columnas en otros dispositivos
        spacing={4} // Espacio entre las tarjetas
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: isMobile ? 30 : 0 }} // Ajusta la posición inicial para dispositivos móviles
            animate={{
              opacity: animate ? 1 : 0,
              y: animate ? 0 : isMobile ? 10 : 0, // Ajusta la posición final para dispositivos móviles
            }}
            transition={{ delay: index * 0.2 + 0.2 }}
          >
            <Box
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              rounded={'lg'}
              pos={'relative'}
              ref={boxRef}
              style={cardStyles}
            >
              <Stack pt={10} align={'center'}>
                <Heading
                  color="#703519"
                  fontSize={'2xl'}
                  fontFamily={'body'}
                  fontWeight={500}
                >
                  {card.title}
                </Heading>
                <Text bg="transparent" color="#703519">
                  {card.text}
                </Text>
              </Stack>
              <Box display="flex" alignItems="center" justifyContent="center">
                {isMobile ? null : (
                  <Image
                    rounded={'lg'}
                    objectFit={'cover'}
                    src={card.imageSrc}
                    alt="#"
                    mt={4}
                    h={150}
                  />
                )}
              </Box>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Narrative;
