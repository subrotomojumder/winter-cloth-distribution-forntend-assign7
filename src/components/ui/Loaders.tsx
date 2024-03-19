import { cn } from "@/lib/utils";
import PulseLoader from "react-spinners/PulseLoader";
import FadeLoader from "react-spinners/FadeLoader";

type TLoderProps = {
  className?: string;
  colorHex?: string;
};

export const LoadingPoints = ({ className, colorHex }: TLoderProps) => {
  return (
    <div className={cn("w-full h-[90vh] max-h-[500px] flex justify-center items-center", className)}>
      <PulseLoader color={colorHex || "#36d7b7"} />
    </div>
  );
};
export const LoadingFade = ({ className, colorHex }: TLoderProps) => {
  return (
    <div className={cn("w-full h-[90vh] max-h-[500px] flex justify-center items-center", className)}>
      <FadeLoader color={colorHex || "#909b9f"} />
    </div>
  );
};