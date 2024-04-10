import { CDN_URL } from "../utils/constants";

const ResCategoryList = ({ itemCards }) => {
  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 text-left border-gray-400 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full rounded-lg"
                alt={item.card.info.name}
              />
            )}
            <button className="p-2 w-16 mx-10 my-1 font-bold rounded-lg bg-white text-green-600 hover:bg-slate-100">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResCategoryList;
