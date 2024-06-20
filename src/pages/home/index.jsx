import { useContext } from "react";
import { GlobalContext } from "../../context";
import "./style.css";
import RecipeItem from "../../components/recipeitem";
const Home = () => {
  const { fetching, recipeList } = useContext(GlobalContext);
  if (fetching) {
    return (
      <div className="spinner-grow text-primary fr-fetching" role="status ">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  console.log(recipeList);

  return (
    <>
      <div className="fr-home-main">
        {recipeList && recipeList.length > 0 ? (
          <div className="fr-home-recipelist">
            {recipeList.map((item, index) => {
              return (
                <div className="fr-home-item shadow-sm">
                  <div className="fr-item-image">
                    <img src={item.image_url} alt="" />
                  </div>
                  <div className="fr-item-body">
                    <div className="fr-item-publisher">{item.publisher}</div>
                    <div className="fr-item-title">{item.title}</div>
                    <button
                      type="button"
                      className="btn btn-primary fr-item-button"
                    >
                      Get More Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className="fr-nolist">Nothing to show please enter any item </h1>
        )}
      </div>
    </>
  );
};

export default Home;
