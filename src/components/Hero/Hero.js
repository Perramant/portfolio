import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue sur<br />
        Mon Portfolio Personnel
      </SectionTitle>
      <SectionText>
      Mon but est de réaliser vos projets en produisant votre site web et/où applications de rêve.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>En savoir plus</Button>
     
    </LeftSection>
  </Section>
);

export default Hero;