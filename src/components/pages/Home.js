import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaChevronDown } from 'react-icons/fa';

const FAQContainer = styled.div`
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

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  overflow: hidden;
`;

const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.primary};

  svg {
    transition: transform ${theme.transitions.default};
    transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
  }

  &:hover {
    background: ${theme.colors.background};
  }
`;

const Answer = styled(motion.div)`
  padding: 1.5rem;
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  line-height: 1.6;
`;

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the purpose of this website?',
      answer: 'This website is dedicated to showcasing the world\'s most incredible bridges, celebrating their beauty, engineering marvels, and historical significance. We aim to educate, inspire, and connect bridge enthusiasts from around the world.'
    },
    {
      question: 'How are the bridges categorized?',
      answer: 'Bridges are categorized in multiple ways: by their historical significance (Historical Great Bridges), modern achievements (Modern Great Bridges), iconic status (Iconic Bridges), and by their physical characteristics (Longest, Tallest, Highest, Oldest).'
    },
    {
      question: 'Can I submit information about a bridge?',
      answer: 'Yes! We welcome contributions from bridge enthusiasts and experts. You can use our contact form to submit information about bridges that you believe should be featured on our website.'
    },
    {
      question: 'How often is the content updated?',
      answer: 'We regularly update our content to include new bridges, historical discoveries, and engineering achievements. Our team constantly researches and verifies information to ensure accuracy.'
    },
    {
      question: 'Can I use images from this website?',
      answer: 'All images on this website are either licensed for our use or in the public domain. Please check the image credits for specific usage rights and attribution requirements.'
    },
    {
      question: 'How can I find bridges in my area?',
      answer: 'You can use our filter system to search for bridges by continent, country, or city. Additionally, our travel section provides information about visiting these remarkable structures.'
    },
    {
      question: 'Are there any educational resources available?',
      answer: 'Yes! We provide detailed information about bridge engineering, architecture, and history. Our content is suitable for students, educators, and anyone interested in learning about these magnificent structures.'
    },
    {
      question: 'How can I report incorrect information?',
      answer: 'If you find any incorrect information, please use our contact form to report it. We take accuracy very seriously and will promptly review and correct any errors.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </Title>

      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Question
              onClick={() => toggleFAQ(index)}
              isOpen={openIndex === index}
            >
              {faq.question}
              <FaChevronDown />
            </Question>
            <AnimatePresence>
              {openIndex === index && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default Home;
