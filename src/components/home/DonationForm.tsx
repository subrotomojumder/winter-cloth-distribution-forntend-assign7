import { CalendarDays } from "lucide-react";
import { useScroll, useTransform , motion} from "framer-motion";
import { useRef } from "react";

const DonationForm = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.5 1"],
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };
  return (
    <div
      className="relative"
      style={{
        backgroundImage:
          "url(https://donations4563.wpenginepowered.com/wp-content/uploads/2011/09/main-image-1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full">
        <div className="flex flex-col items-center justify-center space-y-2 py-20 lg:py-28">
          <h1 className="text-2xl lg:text-3xl">YOUR DONATIONS</h1>
          <h1 className="text-4xl md:text-5xl font-medium text-red-500">
            HELP VETERANS
          </h1>
          <motion.div ref={componentRef} style={style} className="bg-white/70 rounded-lg p-5 lg:p-6">
            <div className="bg-gray-400/90 rounded-lg p-6 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-gray-700">
                <CalendarDays className="size-8 lg:text-10" />
                <span className="text-lg md:text-xl">
                  SCHEDULE YOUR DONATION
                </span>
              </div>
              <div className="bg-white rounded-lg flex items-center p-1.5">
                <input
                  type="text"
                  placeholder="ZIPCODE"
                  className="w-full outline-none indeterminate:bg-red-400 px-2 placeholder:text-gray-500 text-sm"
                />
                <button className="bg-red-600 text-sm text-white px-2 py-1.5 rounded-lg">
                  SCHEDULE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
