const TimeSkeleton = () => {
  return (
    <div className="flex animate-pulse space-x-2 w-36">
      <div className="h-4 rounded-lg bg-gray-500 w-2/5"></div>
      <div className="h-4 rounded-lg bg-gray-500 w-3/5"></div>
    </div>
  );
};

export default TimeSkeleton;
