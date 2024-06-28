const Circle = ({ value }) => {
  return (
    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white text-sm font-bold z-10">
      {value}
    </div>
  );
};

export default Circle;
