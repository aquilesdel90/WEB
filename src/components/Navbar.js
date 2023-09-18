import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Collapse,
  Skeleton,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import gunnylogo from '../assets/gunnylogo.png';
import { Link, scroller } from 'react-scroll';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = to => {
    setActiveSection(to);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('load', handleResize);

  return (
    <Box
      bg="transparent"
      p={2}
      position="sticky"
      top={0}
      zIndex={1000}
      transition="background 0.3s ease"
    >
      <Flex justify="space-around" align="center">
        {isLoading ? (
          <Skeleton height="50px" width="150px" mr={2} />
        ) : (
          <Image src={gunnylogo} alt="Gunny Logo" h={50} p={1} />
        )}

        {isLoading ? (
          <Flex>
            <Skeleton height="10px" width="60px" mr={2} />
            <Skeleton height="10px" width="60px" mr={2} />
            <Skeleton height="10px" width="60px" mr={2} />
            <Skeleton height="10px" width="60px" mr={2} />
            <Skeleton height="10px" width="60px" mr={2} />
          </Flex>
        ) : isMobile ? (
          <IconButton
            display={{ base: 'block', md: 'none' }}
            color="#FEB301"
            bg="#3A2C6A"
            style={{ border: '1px solid #FEB301' }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            aria-label="Toggle navigation"
          />
        ) : (
          <Flex>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              onSetActive={() => handleSetActive('home')}
            >
              <Button
                variant="ghost"
                color={activeSection === 'home' ? '#FEB301' : 'white'}
                borderBottom={
                  activeSection === 'home' ? '1px solid #FEB301' : 'white'
                }
                w="100%"
              >
                Home
              </Button>
            </Link>
            <Link
              to="narrative"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              onSetActive={() => handleSetActive('narrative')}
            >
              <Button
                variant="ghost"
                color={activeSection === 'narrative' ? '#FEB301' : 'white'}
                borderBottom={
                  activeSection === 'narrative' ? '1px solid #FEB301' : 'white'
                }
                w="100%"
              >
                Narrative
              </Button>
            </Link>

            <Link
              to="roadmap"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              onSetActive={() => handleSetActive('roadmap')}
            >
              <Button
                variant="ghost"
                color={activeSection === 'roadmap' ? '#FEB301' : 'white'}
                borderBottom={
                  activeSection === 'roadmap' ? '1px solid #FEB301' : 'white'
                }
                w="100%"
              >
                Roadmap
              </Button>
            </Link>

            <Link
              to="inugis"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              onSetActive={() => handleSetActive('inugis')}
            >
              <Button
                variant="ghost"
                color={activeSection === 'inugis' ? '#FEB301' : 'white'}
                borderBottom={
                  activeSection === 'inugis' ? '1px solid #FEB301' : 'white'
                }
                w="100%"
              >
                Inugis
              </Button>
            </Link>

            {/* Repite lo mismo para los demás elementos */}
          </Flex>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box
          mt={4}
          p={2}
          bg="#3A2C6A"
          rounded="md"
          shadow="md"
          display={isMobile ? 'block' : 'none'}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
          >
            <Button variant="ghost" color="white" w="100%">
              Home
            </Button>
          </Link>
          <Link
            to="narrative"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
          >
            <Button variant="ghost" color="white" w="100%">
              Narrative
            </Button>
          </Link>
          <Link
            to="narrative"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
          >
            <Button variant="ghost" color="white" w="100%">
              Narrative
            </Button>
          </Link>
          {/* Repite lo mismo para los demás elementos */}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
