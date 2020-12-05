import React from 'react';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../common';


const Gallery = (): JSX.Element => {

    return (
        <Container>
            <div>
                <FontAwesomeIcon icon={icons.profile} />
            </div>
        </Container>
    );
};

export default Gallery;