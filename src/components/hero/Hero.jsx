import "./hero.css";
import Speech from "./Speech";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <h1 className="hTitle">
          Добрый день!
          <br />
          <span>Меня зовут Юрий Сергеевич!</span>
        </h1>
        {/* AWARDS */}
        <div className="awards">
          <h2>Профессиональный репетитор</h2>
          <p>
            Занимаюсь физикой и математикой со школьниками больше 15 лет,
            эксперт ЕГЭ по физике, кандидат физико-математический наук, преподаю
            в НИЯУ МИФИ.
          </p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
        {/* SCROLL SVG */}
        <a href="#services">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <a href="/">
          <img src="/instagram.png" alt="" />
        </a>
        <a href="/">
          <img src="/facebook.png" alt="" />
        </a>
        <a href="/">
          <img src="/youtube.png" alt="" />
        </a>
        {/* BUBBLE */}
        <Speech/>
        {/* CERTFICATE */}
        <div className="certificate">
            <img src="/certificate.png" alt="" />
            ПРОФЕССИОНАЛЬНЫЙ <br/>
            РЕПЕТИТОР<br/>
            ПО ФИЗИКЕ И МАТЕМАТИКЕ
        </div>
        {/* CONTACT BUTTON */}
        <a href="/#contact" className="contactLink">
            <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              /></svg>
            </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
