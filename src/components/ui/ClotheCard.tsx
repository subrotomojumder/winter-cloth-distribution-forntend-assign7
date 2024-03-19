import { TClothe } from "@/types/clothes.type";
import { Badge } from "./badge";
import { Button } from "./button";
import { Link } from "react-router-dom";

const ClotheCard = ({ clothe }: { clothe: TClothe &{_id: string} }) => {
  return (
    <div className="border p-4 lg:p-5 shadow shadow-slate-100 rounded-md">
      <div className="bg-gray-100 p-2 rounded-sm">
        <img src={clothe.image} alt="" className="w-full" />
      </div>
      <div className="mb-2 space-y-1">
        <h3 className="text-xl font-bold truncate mt-4 mb-2">{clothe.title}</h3>
        <div className="flex justify-start items-center space-x-2 font-medium text-gray-800">
          <p>Size : </p>
          {!clothe.size || clothe.size.length < 1 ? (
            <span>N/A</span>
          ) : (
            clothe.size.map((item: string, i: number) => (
              <Badge key={i} variant="outline">
                {item}
              </Badge>
            ))
          )}
        </div>
        <p className=" font-medium text-gray-800">
          Category : {clothe.category}
        </p>
        <p className="line-clamp-3 text-sm text-gray-600">{clothe.des}</p>
      </div>
      <Link to={`/winter-clothes/${clothe._id}`}>
        <Button className="w-full hover:bg-gray-200 mt-2" variant={"secondary"}>
          View Details
        </Button>
      </Link>
    </div>
  );
};

export default ClotheCard;
