import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref} onSubmit={sendEmail}>
      <div className="cSection">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Свяжитесь со мной
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Имя</label>
            <input type="text" name="from_name" placeholder="Фамилия Имя" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>почта (Email)</label>
            <input
              type="email"
              name="user_email"
              placeholder="email@gmail.com"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>телефон</label>
            <input
              type="tel"
              name="user_phone"
              placeholder="+123456789"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Сообщение</label>
            <textarea
              rows={10}
              name="message"
              placeholder="Напишите здесь мне ваше сообщение..."
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="formButton">
            Отправить
          </motion.button>
          {success && <span>Ваше сообщение отправлено!</span>}
          {error && <span>Что-то пошло не так</span>}
        </motion.form>
      </div>
      <div className="cSection"><ContactSvg/></div>
    </div>
  );
};

export default Contact;