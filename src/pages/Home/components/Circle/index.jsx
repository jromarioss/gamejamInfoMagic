import React from 'react';

const Circle = ({ value }) => {
  return (
    <div className="ml-6 flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white text-sm font-bold z-10">
      {value}
    </div>
  );
};

export default Circle;
