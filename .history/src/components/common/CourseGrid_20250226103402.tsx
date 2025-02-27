import React from 'react';

const CourseGrid = ({ children }) => {
  return <div className="grid grid-cols-3 gap-8 mt-8">{children}</div>;
};

export default CourseGrid;
