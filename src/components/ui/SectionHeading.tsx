import { cn } from "@/lib/utils";

type TSectionHeadingProps = {
  details?: string;
  headingText: string;
  className?: string;
  detailsClass?: string;
};

const SectionHeading = ({
  details,
  headingText,
  className,
  detailsClass,
}: TSectionHeadingProps) => {
  return (
    <>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3",
          className
        )}
      >
        {headingText}
      </h2>
      <p
        className={cn(
          "text-center max-w-[90ch] mx-auto text-gray-700",
          detailsClass,
          {
            hidden: !details,
          }
        )}
      >
        {details}
      </p>
    </>
  );
};

export default SectionHeading;