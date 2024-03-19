import Container from "@/components/Container";
import { cn } from "@/lib/utils";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
const DonorTestimonials = () => {
  const slider1Ref = useRef<Slider>(null);
  const comments = [
    {
      userImg: "https://i.ibb.co/rwq8hXS/Ellipse-80.png",
      name: "Amelia Joseph",
      location: "Noakhali, Bangladesh",
      message:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
    {
      userImg: "https://i.ibb.co/YjYC2Qd/Ellipse-80-1.png",
      name: "Jacob Joshua",
      location: "Gagipur-2",
      message:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    },
    {
      userImg: "https://i.ibb.co/rwq8hXS/Ellipse-80.png",
      name: "Amelia Joseph",
      location: "Kalkata, India",
      message:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
    {
      userImg: "https://i.ibb.co/YjYC2Qd/Ellipse-80-1.png",
      name: "Jacob Joshua",
      location: "Ramgong",
      message:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    },
    {
      userImg: "https://i.ibb.co/rwq8hXS/Ellipse-80.png",
      name: "Amelia Joseph",
      location: "Borishal",
      message:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
    {
      userImg: "https://i.ibb.co/YjYC2Qd/Ellipse-80-1.png",
      name: "Khulna",
      location: "Chief Manager",
      message:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <Container className="">
      <div className="flex justify-between items-center flex-nowrap gap-3">
        <SectionHeading
          headingText="Top 6 Donor Testimonials"
          className="text-start"
        />
        <div className="flex flex-nowrap gap-3">
          <button
            onClick={handlePrev}
            className="rounded-full p-3 text-gray-300 hover:text-gray-400 transition-all"
          >
            <ArrowBigLeft className="shrink-0 size-4 lg:size-5" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full p-3  text-gray-300 hover:text-gray-400 transition-all"
          >
            <ArrowBigRight className="shrink-0 size-4 lg:size-5" />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Slider {...settings} ref={slider1Ref}>
          {comments.map((comment, i) => (
            <div key={i} className="px-3">
              <div
                className={cn(
                  "px-8 py-7 bg-green-300/30 rounded space-y-3",
                  
                )}
              >
                <div className="flex items-center gap-4">
                  <div key={i} className="">
                    <img
                      src={comment.userImg}
                      alt=""
                      className={cn("object-cover w-16 h-16 rounded-full")}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold drop-shadow">{comment.name}</h3>
                    <p className="font-medium text-gray-900 text-sm">
                      {comment.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm">{comment.message}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default DonorTestimonials;
