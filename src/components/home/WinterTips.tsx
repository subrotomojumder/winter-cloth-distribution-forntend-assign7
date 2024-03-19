import Container from "../Container";
import SectionHeading from "../ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const WinterTips = () => {
  return (
    <Container>
      <SectionHeading headingText="Winter Tips" className="mb-4 lg:mb-6" />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is the best advice for winter?
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                ● Have dry fruits. Dry fruits and nuts such as almonds, walnuts,
                cashews naturally increase your body temperature.
              </li>
              <li>● Eat seasonal root vegetable.</li>
              <li>● Maintain high hygiene.</li>
              <li>● Stay hydrated.</li>
              <li>● Eat fresh fruits</li>
              <li>● Have enough fibre.</li>
              <li>● Have leafy green vegetables.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What are the tips for cold weather?
          </AccordionTrigger>
          <AccordionContent>
            Dress in several layers of loose-fitting, lightweight clothing
            instead of a single heavy layer. Outer garments should be tightly
            woven and water repellent. Wear a hat, mittens (not gloves), and
            sturdy waterproof boots to protect your arms, legs, hands and feet.
            Cover your mouth with a scarf to protect your lungs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How can I enjoy winter season?</AccordionTrigger>
          <AccordionContent>
            <ol className="">
              <li>
                1. Make snow angels. No need to wait for sticky snow to make
                snow angels!.
              </li>
              <li>2. Make snowmen. What would winter be without snowmen.</li>
              <li>3. Make hot chocolate.</li>
              <li>4. Shovel together.</li>
              <li>5. Look out for frostbite.</li>
              <li>6. Do family activities.</li>
              <li>7. Play winter dress-up.</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Why is winter season better?</AccordionTrigger>
          <AccordionContent>
            Making the best out of this Cold Season - Advantages of ... It's
            also the season for hibernation-like behaviors that can have some
            positive effects on your health and mood. The hibernation season
            brings a lot of joy to people because of the holidays. It is a great
            time to get out in the cold air and get some exercise since the cold
            season is also a great time to stay healthy.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default WinterTips;
