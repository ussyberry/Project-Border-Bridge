import React from 'react';

const SegmentPathway = ({ segment }) => {
  return (
    <div className="segment-pathway">
      <h3>{segment.title}</h3>
      <p>{segment.description}</p>
      {/* Add more details or components for the segment pathway */}
    </div>
  );
};

export default SegmentPathway;

