import { cn } from "@/lib/utils";
import { Button } from "./button";
import { PhoneForwarded } from "lucide-react";
import { TVolunteer } from "@/types/users.type";

const VolunteerCard = ({ data }: { data: TVolunteer }) => {
  return (
    <div className="bg-white dark:bg-slate-300 drop-shadow rounded text-center p-8">
      <div className="rounded-full bg-gray-100 w-3/4 mx-auto my-2 ">
        <img
          src={
            data.image ||
            "https://www.radiustheme.com/demo/html/medilink/medilink/img/team/team34.png"
          }
          alt=""
          className={cn("object-cover rounded-full h-full w-full")}
        />
      </div>
      <div className="space-y-2">
        <h4 className="text-2xl font-semibold text-blue-600">{data.name}</h4>
        <h4 className="text-slate-500">{data.location}</h4>
        <div className="pt-4 space-y-3">
          <p className="leading-3 font-semibold">Bio :</p>
          <hr />
          <p className="max-w-[35ch] mx-auto line-clamp-2 text-sm text-slate-500">
            {data.bio}
          </p>
          <Button
            className="w-full uppercase gap-x-2"
            variant={"outline"}
            size={"lg"}
          >
            <PhoneForwarded size={18} />
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
