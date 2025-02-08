import Counter from "./Counter";
import ExamModelContainer from "./examModel/ExamModelContainer";
import { motion, useInView } from "motion/react";
import "./services.css";
import { useRef, useState } from "react";
import MathDescContainer from "./mathDesc/MathDescContainer";
import PhysDescContainer from "./physDesc/PhysDescContainer";


const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Обяснить физику",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Обяснить математику",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Подготовить к экзаменам (ОГЭ, ЕГЭ, ДВИ, олимпиады)",
    counter: 46,
  },
];

const Services = () => {
    const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          Как я могу помочь?
        </motion.h1>
        <motion.div
          className="serviceList"
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
        >
          {services.map((service) => (
            <motion.div
              className="service"
              key={service.id}
              variants={listVariants}
              onClick={()=> setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter}+ Учеников</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Довольных учеников" />
          <Counter from={0} to={100} text="Довольных родителей" />
        </div>
      </div>
      <div className="sSection right">
      {
        currentServiceId===1? (<MathDescContainer/>): currentServiceId ===2? (<PhysDescContainer/>) : (<ExamModelContainer/>)
      }
      </div>
    </div>
  );
};

export default Services;
