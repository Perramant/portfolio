import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:0695511461'>06 95 51 14 61</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:contact.perramant@gmail.com'>contact.perramant@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innover un projet à la fois</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com'>
    <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
    <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
    <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
