import React from 'react';
import { Box } from '@chakra-ui/react';

import Narrative from '../components/Narrative';
import Roadmap from '../components/Roadmap';
import Card from '../components/Card';
import { Element } from 'react-scroll';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <Box className="body-page">
      <Navbar />
      <Element name="home">
        <Header />
      </Element>
      <Element name="narrative">
        <Narrative />
      </Element>
      <Element name="roadmap">
        <Roadmap />
      </Element>
      <Element name="inugis">
        <Card />
      </Element>
      <Footer />
    </Box>
  );
};

export default Page;
