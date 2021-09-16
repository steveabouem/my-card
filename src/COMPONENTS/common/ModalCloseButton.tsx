import React, {useState} from 'react';
import {StyledCloseIcon} from "../styles";
import {icons} from "./icons";

export const CloseIcon = ({onClose}: {onClose: () => void}): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <StyledCloseIcon
      color="#1b5381"
      icon={hovered ? icons.close.hover : icons.close.static}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClose}
    />
  );
};