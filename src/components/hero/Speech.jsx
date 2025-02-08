import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
const Speech = () => {
  return (
    <motion.div className="bubbleContainer" animate={{opacity: [0,1]}} transition={{duration: 2}}>
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Подготволю к экзаменам по физике или математике",
            1000,
            "Подготволю к ОГЭ и ЕГЭ по физике или математике",
            1000,
            "Доступным языком объясню любую тему по физике или математике",
            1000,
            "Подготовлю к олимпиадам по физике",
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
