import { NavLink } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between  ">
      <div className="">
        {" "}
        <NavLink
          to={"/"}
          className="text-blue-500 text-2xl tracking-widest font-semibold md:text-3xl "
        >
          FoodRecipe
        </NavLink>
      </div>
      <div className="">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a Item"
            className="border rounded-[2rem] shadow-md text-xl p-2 ps-3 bg-white w-full md:w-80 mb-2 md:text-2xl"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </form>
      </div>
      <div className="m-4">
        <ul className="flex space-x-12 text-xl  font-medium text-blue-950 md:text-2xl ">
          <li>
            <NavLink to={"/"} className=" ">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"} className="">
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
