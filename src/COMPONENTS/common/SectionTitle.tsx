import React, { useState } from 'react';
import { StyledHeader, StyledHeaderText } from './styles';

interface ISectionTitleProps {
  title: string;
  isInView?: boolean;
}

const SectionTitle = ({title, isInView}: ISectionTitleProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  setTimeout(() => {
    setLoaded(true);
  }, 100);

  return (
    <StyledHeader>
      <StyledHeaderText className={loaded && isInView ? 'loaded' : ''}>{title.toUpperCase()}</StyledHeaderText>
    </StyledHeader>
  );
};

export default SectionTitle;