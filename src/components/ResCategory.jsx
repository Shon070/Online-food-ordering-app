import ResCategoryList from "./ResCategoryList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex((prevShowIndex) =>
      prevShowIndex === showItems ? null : showItems
    );
  };
  return (
    <div
      onClick={handleClick}
      className="w-6/12 mx-auto my-4 p-4 bg-gray-200 shadow-lg cursor-pointer"
    >
      <div className="flex justify-between">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "🔺" : "🔻"}</span>
      </div>
      {showItems && <ResCategoryList itemCards={data.itemCards} />}
    </div>
  );
};

export default ResCategory;
