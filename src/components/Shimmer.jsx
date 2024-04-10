const Shimmer = () => {
  // This function generates a unique key for each shimmer item
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <div className="body">
      <div className="m-8 p-5 flex justify-between items-center">
        {/* Input field placeholder */}
        <div className="flex items-center">
          <div
            className="border border-solid border-black rounded-sm p-2 m-2 bg-inherit animate-pulse"
            style={{ width: "200px", height: "32px" }}
          ></div>
          {/* Search button placeholder */}
          <div
            className="font-bold px-5 py-2 bg bg-green-100 rounded-sm animate-pulse"
            style={{ height: "40px", minWidth: "100px" }}
          ></div>
        </div>
      </div>

      <div className="flex flex-wrap p-24 m-auto items-center justify-center">
        {/* Shimmer for each card */}
        {[...Array(20)].map((_, index) => (
          <div
            key={generateKey("shimmer")}
            className="m-6 p-5 w-80 h-96 flex flex-col items-center justify-center bg-gray-200 shadow-2xl rounded-md animate-pulse"
          >
            {/* Image placeholder */}
            <div className="w-64 h-40 rounded-xl bg-gray-400"></div>
            {/* Text placeholders */}
            <div className="text-center py-2 font-semibold">
              {/* Shimmer effect for text content below the image */}
              {[...Array(5)].map((_, index) => (
                <div
                  key={generateKey(`text_${index}`)}
                  className="h-4 bg-gray-400 w-3/4 rounded mt-2"
                  style={{ width: "75%", height: "16px" }} // Set width and height for text placeholders
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
