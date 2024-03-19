import { ArrowBigRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import Container from "../Container";
import { motion } from "framer-motion";

const HeroSection = () => {
  const variants = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 5,
      y: [1, 1],
      transition: {
        duration: 1,
        type: "spring",
        delay: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className=" bg-gray-100 pt-10 md:pt-14">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 place-items-center py-16 md:py-20">
        <div className="p-8 space-y-5 text-center md:text-start lg:mr-2">
          <h1 className="text-2xl lg:text-4xl font-bold">
            THE IMPACT OF DONATE CLOTHES TO HOMELESS
          </h1>
          <p>
            SPAR’s winter program is designed to bridge the gap, allowing you to
            be a contributor to saving lives. The SPAR winter program is more
            than just an event; it’s a journey. A journey that takes you deep
            into the real circumstances of underprivileged people in this cold
            season. Our team works day and night to help those people this
            season who suffer in this life-threatening weather in Bangladesh.
          </p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className=" pt-3"
          >
            <Button className="rounded px-8 lg:text-lg" variant={"destructive"}>
              Donate Now <ArrowBigRightIcon size={20} />
            </Button>
          </motion.div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/kMHkp1J/Whats-App-Image-2024-02-23-at-12-01-21-AM.jpg"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
