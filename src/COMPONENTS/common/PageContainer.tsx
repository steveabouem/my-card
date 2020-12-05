import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { css } from "@emotion/core";
import PacmanLoader  from "react-spinners/PacmanLoader";

interface IPageContainerProps {
    callback?: () => void;
    children: React.ReactNode;
}

const StyledContainer = styled(Container)`
    margin-top: 70px;
    padding: 20px;
`;

const PageContainer = ({callback, children}: IPageContainerProps): JSX.Element => {
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
                        // css={margin: }
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