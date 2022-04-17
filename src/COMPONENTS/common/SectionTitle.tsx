import React, { useEffect, useState } from 'react';
import { StyledHeader, StyledHeaderText } from './styles';

interface ISectionTitleProps {
  title: string;
  isInView: boolean;
  section?: string;
}

const SectionTitle = ({ title, isInView, section }: ISectionTitleProps): JSX.Element => {
  const [inView, setInView] = useState<boolean>(false);

  setTimeout(() => {
    setInView(true);
  }, 300);

  useEffect(() => {
    if (!isInView) {
      return;
    }
    
  });

  return (
    <StyledHeader className={section}>
      <StyledHeaderText className={inView ? 'loaded' : ''}>{title.toUpperCase()}</StyledHeaderText>
    </StyledHeader>
  );
};

export default SectionTitle;