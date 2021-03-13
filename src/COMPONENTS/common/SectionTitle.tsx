import React, { useEffect, useState } from 'react';
import { StyledHeader, StyledHeaderText } from './styles';

interface ISectionTitleProps {
  title: string;
  isInview: boolean;
}

const SectionTitle = ({ title, isInview }: ISectionTitleProps): JSX.Element => {
  const [inView, setInView] = useState<boolean>(false);

  setTimeout(() => {
    setInView(true);
  }, 300);

  useEffect(() => {
    if (!isInview) {
      return;
    }
    
  });

  return (
    <StyledHeader>
      <StyledHeaderText className={inView ? 'loaded' : ''}>{title.toUpperCase()}</StyledHeaderText>
    </StyledHeader>
  );
};

export default SectionTitle;