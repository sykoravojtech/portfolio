import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
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
  const theme = useTheme();
  const email = "sykoravojtech.de@gmail.com";
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setOpen(true); // optional: if you still want the Snackbar
  };

  return (
    <Container>
      <Title>Contact</Title>
      <Desc>Feel free to reach out to me for any questions or collaboration!</Desc>
      <EmailContainer>
        <Tooltip title="Send Email">
          <IconButton href={`mailto:${email}`} aria-label="send email">
            <EmailIcon sx={{ color: theme.text_primary }} />
          </IconButton>
        </Tooltip>
        <EmailText>{email}</EmailText>
        <Tooltip title={copied ? "Copied!" : "Copy Email"}>
          <IconButton onClick={handleCopy} aria-label="copy email">
            <ContentCopyIcon sx={{ color: theme.text_primary }} />
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
