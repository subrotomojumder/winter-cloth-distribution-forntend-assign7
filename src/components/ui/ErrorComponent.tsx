/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";

type TErrorComponent = {
  error?: any;
  className?: string;
};
const ErrorComponent = ({ error, className }: TErrorComponent) => {
  return (
   <div className={cn("text-red-500 h-[90vh] max-h-[500px] flex justify-center items-center", className)}>
     <p >
      {error?.message || "Something went wrong!"}
    </p>
   </div>
  );
};

export default ErrorComponent;