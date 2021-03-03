import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../common/SectionTitle';

const Bio = (): JSX.Element => {
  const { ref, inView } = useInView();
  
  return (
    <div>
      <div ref={ref}>
        {inView && <SectionTitle title="Who Am I?" isInview={inView} />}
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a eros lacus. 
          Pellentesque commodo dapibus erat nec iaculis. Praesent et porta est. Suspendisse felis erat, 
          egestas tempus volutpat sed, molestie tristique arcu. Maecenas nisl enim, eleifend id tortor a, 
          lobortis vestibulum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sem lorem, 
          vestibulum vel blandit vitae, rhoncus eget turpis. Donec quis purus urna. Sed eu consectetur ligula. Donec ultricies 
          leo vitae commodo semper. Curabitur facilisis mi id est sollicitudin, quis gravida dolor pellentesque. Duis sagittis
          augue a ante vulputate ornare vel aliquet diam. Pellentesque turpis odio, tincidunt non faucibus a, venenatis eu nulla.
            Ut sodales nulla a ipsum vehicula consectetur.
        </div>
      </div>
    </div>
  );
}

export default Bio;