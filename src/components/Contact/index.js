import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton, Snackbar, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.card};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const EmailText = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  user-select: text;
`;

const Contact = () => {
  const email = "sykoravojtech01@gmail.com";
  const [open, setOpen] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setOpen(true);
  };

  return (
    <Container>
      <Title>Contact</Title>
      <Desc>Feel free to reach out to me for any questions or collaboration!</Desc>
      <EmailContainer>
        <Tooltip title="Send Email">
          <IconButton href={`mailto:${email}`} aria-label="send email">
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <EmailText>{email}</EmailText>
        <Tooltip title="Copy Email">
          <IconButton onClick={handleCopy} aria-label="copy email">
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </EmailContainer>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Email copied to clipboard!"
      />
    </Container>
  );
};

export default Contact;
