import ResCategoryList from "./ResCategoryList";

const ResCategory = ({ data, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-6/12 mx-auto my-4 p-4 bg-gray-200 shadow-lg cursor-pointer"
    >
      <div className="flex justify-between">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{isOpen ? "🔺" : "🔻"}</span>
      </div>
      {isOpen && <ResCategoryList itemCards={data.itemCards} />}
    </div>
  );
};

export default ResCategory;
