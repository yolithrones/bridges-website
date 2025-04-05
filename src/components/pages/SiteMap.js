import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/themes/theme';
import { bridgeCategories, bridgeTypes } from '../../data/bridges';

const SiteMapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.secondary};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${theme.colors.border};
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const LinkItem = styled(motion.li)`
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const SiteMap = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SiteMapContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Site Map
      </Title>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Section>
          <SectionTitle>Main Pages</SectionTitle>
          <LinkList>
            <LinkItem variants={itemVariants}>
              <StyledLink to="/">Home</StyledLink>
            </LinkItem>
            <LinkItem variants={itemVariants}>
              <StyledLink to="/about">About Us</StyledLink>
            </LinkItem>
            <LinkItem variants={itemVariants}>
              <StyledLink to="/contact">Contact</StyledLink>
            </LinkItem>
            <LinkItem variants={itemVariants}>
              <StyledLink to="/gallery">Gallery</StyledLink>
            </LinkItem>
            <LinkItem variants={itemVariants}>
              <StyledLink to="/feedback">Feedback</StyledLink>
            </LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Bridge Categories</SectionTitle>
          <LinkList>
            {Object.entries(bridgeCategories).map(([key, value]) => (
              <LinkItem key={key} variants={itemVariants}>
                <StyledLink to={`/bridges/category/${key}`}>{value}</StyledLink>
              </LinkItem>
            ))}
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Bridge Types</SectionTitle>
          <LinkList>
            {Object.entries(bridgeTypes).map(([key, value]) => (
              <LinkItem key={key} variants={itemVariants}>
                <StyledLink to={`/bridges/type/${key}`}>{value}</StyledLink>
              </LinkItem>
            ))}
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Resources</SectionTitle>
          <LinkList>
            <LinkItem variants={itemVariants}>
              <StyledLink to="/faq">FAQ</StyledLink>
            </LinkItem>
            <LinkItem variants={itemVariants}>
              <StyledLink to="/travel">Travel Information</StyledLink>
            </LinkItem>
            <LinkItem variants={itemVariants}>
              <StyledLink to="/newsletter">Newsletter</StyledLink>
            </LinkItem>
          </LinkList>
        </Section>
      </motion.div>
    </SiteMapContainer>
  );
};

export default SiteMap; 