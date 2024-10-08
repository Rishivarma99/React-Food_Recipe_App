import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div
      className=" min-w-[300px] w-full   m-2 border rounded-lg p-2 outline-dotted md:w-[300px] 
      flex flex-col justify-around  sm:w-[70%] "
    >
      <div className="h-[200px]  p-1">
        <img src={item.image_url} className="w-full h-full rounded-md" alt="" />
      </div>
      <div className="flex flex-col space-y-1  ">
        <div className="text-base ps-1 font-normal">{item.publisher}</div>
        <div className="text-2xl ps-1 px-2">{item.title}</div>
        <Link
          to={`/recipe-item/${item?.id}`}
          className=" bg-blue-500  text-white text-center p-2 border rounded-md mx-3 mt-2"
        >
          Get More Details
        </Link>
        {/* <button type="button" className="btn btn-primary mx-3 mt-2">
          Get More Details
        </button> */}
      </div>
    </div>
  );
};

export default RecipeItem;
