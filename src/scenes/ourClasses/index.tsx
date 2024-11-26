import { SelectedPage ,ClassType } from '@/shared/type';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from './Class';


const classes:Array<ClassType>= [
    {
        name: "Yoga",
        description: "Yoga is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India.",
        image: image1,
    },
    {
        name: "Cardio",
        description: "Cardiovascular exercise, also known as cardio or aerobic exercise, is essential for good health.",
        image: image2,
    },
    {
        name: "Weightlifting",
        description: "Weightlifting is a type of strength training that uses weights for resistance.",
        image: image3,
    },
    {
        name: "Zumba",
        description: "Zumba is a popular exercise program inspired by Latin dance.",
        image: image4,
    },
    {
        name: "Pilates",
        description: "Pilates is a method of exercise that consists of low-impact flexibility and muscular strength and endurance movements.",
        image: image5,
    },
    {
        name: "Crossfit",
        description: "CrossFit is a branded fitness regimen created by Greg Glassman.",
        image: image6,
    },
];
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <HText>OUR CLASSES</HText>
          <p className="py-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
            enim mattis odio in risus nunc.
          </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  </section>
  )
}

export default OurClasses