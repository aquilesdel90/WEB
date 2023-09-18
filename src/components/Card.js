import React, { useEffect, useRef } from 'react';
import '../assets/styles/Inugis.scss';
import { Flex, SimpleGrid } from '@chakra-ui/react';

const GunnyCard = () => {
  const cardRef = useRef(null);
  const styleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = e => {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const pos = [offsetX, offsetY];

      const $card = e.currentTarget;

      if (cardRef.current && styleRef.current) {
        const l = pos[0];
        const t = pos[1];
        const h = $card.offsetHeight;
        const w = $card.offsetWidth;
        const px = Math.abs(Math.floor((100 / w) * l) - 100);
        const py = Math.abs(Math.floor((100 / h) * t) - 100);
        const pa = 50 - px + (50 - py);

        const lp = 50 + (px - 50) / 1.5;
        const tp = 50 + (py - 50) / 1.5;
        const px_spark = 50 + (px - 50) / 7;
        const py_spark = 50 + (py - 50) / 7;
        const p_opc = 20 + Math.abs(pa) * 1.5;
        const ty = ((tp - 50) / 2) * -1;
        const tx = ((lp - 50) / 1.5) * 0.5;

        const grad_pos = `background-position: ${lp}% ${tp}%;`;
        const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
        const opc = `opacity: ${p_opc / 100};`;
        const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg);`;

        const style = `
          .card:hover::before { ${grad_pos} }
          .card:hover::after { ${sprk_pos} ${opc} }
        `;

        $card.classList.remove('animated');
        $card.style.transform = tf;
        styleRef.current.innerHTML = style;
      }
    };

    const handleMouseLeave = e => {
      const $card = e.currentTarget;

      if (cardRef.current && styleRef.current) {
        $card.classList.remove('hover-animated'); // Quitamos la clase hover-animated
        styleRef.current.innerHTML = '';
      }
    };

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      flexWrap="wrap"
      h={{ base: '100%', md: '100vh' }} // Ajustamos la altura según el breakpoint
    >
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
        <div className="card bolt animated"></div>
        <div className="card fuzzy animated"></div>
        <div className="card taily animated"></div>
        <div className="card blaze animated"></div>
        <div className="card rockie animated"></div>
      </SimpleGrid>
    </Flex>
  );
};

export default GunnyCard;
