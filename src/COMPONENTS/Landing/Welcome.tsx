import React from 'react';
import { Button } from 'react-bootstrap';

interface IWelcomeProps {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Welcome = ({handleClick}: IWelcomeProps): JSX.Element => {
    return (
        <div className="margin-auto">
            <div>Steve Web Solutions</div>
            <Button onClick={handleClick}>Enter</Button>
        </div>
    );
};

export default Welcome;