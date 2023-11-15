import React from 'react';
import { Box, Flex, Icon, Image, Link, Stack, Text } from '@chakra-ui/react';
import { FaTelegram, FaTwitter } from 'react-icons/fa';
import gunnyLogo from '../assets/gunnylogo.png';

const Footer = () => {
  return (
    <Box bg="#3A2C6A" color="white" py={12}>
      <Box display="flex">
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          mx="auto"
          px={4}
        >
          <Box>
            <Image src={gunnyLogo} alt="Gunny Logo" h={20} />
            <Flex mt={4} align="center" justify="center">
              <Link href="#" isExternal>
                <Icon
                  as={FaTelegram}
                  boxSize={8}
                  color="white"
                  _hover={{ color: '#FEB301' }}
                />
              </Link>
              <Link href="#" isExternal ml={4}>
                <Icon
                  as={FaTwitter}
                  boxSize={8}
                  color="white"
                  _hover={{ color: '#FEB301' }}
                />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Flex justify="center" mt={8}>
        <Stack direction="row" spacing={6}>
          <Link
            fontSize="xl"
            href="/"
            color="white"
            _hover={{ color: '#FEB301' }}
            transition="color 0.3s"
            textTransform="uppercase"
            fontWeight="700"
          >
            Terms of Use
          </Link>
          <Link
            fontSize="xl"
            href="/"
            color="white"
            _hover={{ color: '#FEB301' }}
            transition="color 0.3s"
            textTransform="uppercase"
            fontWeight="700"
          >
            Privacy Policy
          </Link>
          <Link
            fontSize="xl"
            href="/"
            color="white"
            _hover={{ color: '#FEB301' }}
            transition="color 0.3s"
            textTransform="uppercase"
            fontWeight="700"
          >
            Whitepaper
          </Link>
        </Stack>
      </Flex>
      <Box mt={8} textAlign="center" fontSize="sm" color="white">
        &copy; {new Date().getFullYear()} Gunny Games. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
