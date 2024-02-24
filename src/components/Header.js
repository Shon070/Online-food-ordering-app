import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-200 shadow-sm px-2 h-25">
      <div className="logo-container">
        <img className="w-20 py-1" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="p-4 m-4">
          <Link to="/" className="text-2xl font-bold px-5">
            Home
          </Link>
          <Link to="/about" className="text-2xl font-bold px-5">
            About
          </Link>
          <Link to="/cart" className="text-2xl font-bold px-5">
            Cart
          </Link>
          <Link to="/contact" className="text-2xl font-bold px-5">
            Contact us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
