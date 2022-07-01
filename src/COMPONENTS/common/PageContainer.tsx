import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import PacmanLoader from "react-spinners/PacmanLoader";

interface IPageContainerProps {
  callback?: () => void;
  children: React.ReactNode;
}

const StyledContainer = styled(Container)`
  margin-top: 0;
  padding: 0;
  bottom: 5%;
  height: 95%;
  position: absolute;

  overflow: hidden scroll;
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: black;
    border: .5px solid rgba(128, 128, 128, 0.192);
  }

  ::-webkit-scrollbar-thumb {
    background: #ffc107;
    border-radius: 10px;
  }
`;

const PageContainer = ({ callback, children }: IPageContainerProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoaderState = () => {
    if (!callback) {
      return;
    }

    callback();
  };

  return (
    <StyledContainer fluid>
      {loading
        && <PacmanLoader
          loading={loading}
          color="white"
          size={200}
        />
      }
      {children}
    </StyledContainer>
  );
};

export default PageContainer;