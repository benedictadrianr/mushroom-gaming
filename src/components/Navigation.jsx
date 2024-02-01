import mushroom from "../img/mushroom.png";
import cart from "../img/shopping-cart.png";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="w-screen flex justify-center sticky top-0 bg-white/75 z-50 backdrop-blur">
      <div className="w-full xl:w-5/6 p-5 text-md text-gray-600">
        <button
          id="mobile-open-button"
          className="text-3xl lg:hidden focus:outline-none">
          &#9776;
        </button>
        <div className="flex-row hidden lg:flex space-x-8 text-sm justify-evenly xl:justify-between items-center">
          <Link className="w-10" to="/">
            <img src={mushroom} alt="mushroom" className="" />
          </Link>
          <Link
            to="/product/headphone"
            className="hover:text-black py-2 transition-all ease w-10 text-sm">
            Headsets
          </Link>
          <Link
            to="/product/keyboard"
            className="hover:text-black py-2 transition-all ease w-10 text-sm">
            Keyboards
          </Link>
          <Link
            to="/product/mouse"
            className="hover:text-black py-2 transition-all ease w-10 text-sm">
            Mouses
          </Link>
          <input
            type="text"
            name="search"
            id="searchbar"
            placeholder="Search your item here..."
            className="border-2 w-full max-w-xs lg:max-w-80 xl:max-w-md"
          />
          <a
            href=""
            className="hover:text-black text-sm py-2 transition-all ease">
            Login
          </a>
          <a
            href=""
            className="hover:text-black text-sm py-2 transition-all ease">
            Create Account
          </a>
          <a
            className="w-6 h-6 xl:w-8 xl:h-8 flex justify-center align-middle"
            href="">
            <img
              src={cart}
              alt=""
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
