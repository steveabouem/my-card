import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';

const StyledTestimonialWrap = styled.div`
  height: 250px;
  width: 150px;
  max-height: 250px;
  max-width: 150px;
  background: white;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Testimonials = (): JSX.Element => {
  return (
    <div>
      {/* <SectionTitle title="testimonials" /> */}
      <div className="d-flex justify-content-between pt-2 flex-column">
        {[1,2,3,4,5,6,6].map((testimonial: number, i: number) => (
          <StyledTestimonialWrap>{testimonial}</StyledTestimonialWrap>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;