import { NavLink } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div className="food-navbar-main">
      <div className="fr-navbar-title">
        {" "}
        <NavLink to={"/"} className=" fr-navbar-navlink">
          FoodRecipe
        </NavLink>
      </div>
      <div className="fr-navbar-search">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a Item"
            className="shadow"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </form>
      </div>
      <div className="fr-navbar-pages">
        <ul>
          <li>
            <NavLink to={"/"} className=" fr-navbar-navlink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"} className="fr-navbar-navlink">
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
