import Slider from "react-slick";
import Container from "../Container";
import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/button";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryData = [
  {
    img: "https://jibonbld.com/wp-content/uploads/2020/03/IMG-20200108-WA0059.jpg",
    date: "11-01-2024",
    event: "Winter clothing donation program",
    location: "Nizum Deep, Noakhali",
    des: "Winter clothing donation program. Intrinsicly maintain intermandated opportunities for distributed process.",
  },
  {
    img: "https://jibonbld.com/wp-content/uploads/2020/02/74361424_707979633015100_7224643017783640064_n-768x576.jpg",
    date: "11-01-2024",
    event: "Winter clothing donation program",
    location: "Nizum Deep, Noakhali",
    des: "Winter clothing donation program. Intrinsicly maintain intermandated opportunities for distributed process.",
  },
  {
    img: "https://jibonbld.com/wp-content/uploads/2020/03/IMG-20200327-WA0007.jpg",
    date: "11-01-2024",
    event: "Winter clothing donation program",
    location: "Nizum Deep, Noakhali",
    des: "Winter clothing donation program. Intrinsicly maintain intermandated opportunities for distributed process.",
  },
  {
    img: "https://jibonbld.com/wp-content/uploads/2020/03/IMG-20200113-WA0000.jpg",
    date: "11-01-2024",
    event: "Winter clothing donation program",
    location: "Nizum Deep, Noakhali",
    des: "Winter clothing donation program. Intrinsicly maintain intermandated opportunities for distributed process.",
  },
  {
    img: "https://jibonbld.com/wp-content/uploads/2020/03/IMG-20200113-WA0000.jpg",
    date: "11-01-2024",
    event: "Winter clothing donation program",
    location: "Nizum Deep, Noakhali",
    des: "Winter clothing donation program. Intrinsicly maintain intermandated opportunities for distributed process.",
  },
];
const Gallery = () => {
  const slider1Ref = useRef<Slider>(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleNext = () => {
    if (slider1Ref.current) {
      slider1Ref.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (slider1Ref.current) {
      slider1Ref.current.slickPrev();
    }
  };
  return (
    <Container className="relative">
      <SectionHeading headingText="Recent Distribution" />
      <button
        onClick={handlePrev}
        className="rounded-full border border-gray-100 bg-gray-200/20 p-3 text-gray-300 hover:text-gray-400 transition-all absolute left-8 top-2/4 z-10"
      >
        <ArrowLeft className="shrink-0 size-4 lg:size-5" />
      </button>
      <button
        onClick={handleNext}
        className="rounded-full border border-gray-100 bg-gray-200/20 p-3  text-gray-300 hover:text-gray-400 transition-all absolute right-8 top-2/4 z-10"
      >
        <ArrowRight className="shrink-0 size-4 lg:size-5" />
      </button>
      <div className="mt-10">
        <Slider {...settings} ref={slider1Ref}>
          {galleryData.map((item, i: number) => (
            <div key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 lg:gap-10 bg-slate-100 dark:bg-slate-500 rounded-lg">
                <div className="col-span-3 p-6">
                  <img src={item.img} alt="" className="rounded"/>
                </div>
                <div
                  className={cn(
                    "col-span-2 h-full flex flex-col justify-center gap-3 items-center px-2 py-16",
                    {
                      "lg:order-first": i % 2 === 0,
                    }
                  )}
                >
                  <h1 className="text-2xl">{item.date}</h1>
                  <h1 className="text-2xl lg:text-4xl">{item.location}</h1>
                  <p className="text-center">{item.des}</p>
                  <div className="pt-5">
                    <Button variant={"outline"}>Explore More...</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Gallery;
