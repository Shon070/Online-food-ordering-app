const ResMenuShimmer = () => {
  const shimmerItems = Array.from({ length: 40 }, (_, index) => index);

  return (
    <div className="text-center">
      {shimmerItems.map((index) => (
        <div
          key={index}
          className="w-6/12 mx-auto my-4 p-4 bg-gray-200 shadow-lg cursor-pointer animate-pulse"
        >
          <div className="flex justify-between">
            <div className="h-6 bg-gray-400 w-3/4 rounded"></div>
            <div className="h-6 bg-gray-400 w-1/4 rounded"></div>
          </div>
          {/* <div className="h-4 bg-gray-400 w-full rounded mt-4"></div> */}
        </div>
      ))}
    </div>
  );
};

export default ResMenuShimmer;
