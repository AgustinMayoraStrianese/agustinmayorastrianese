import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { useContext, useRef, useState } from "react/cjs/react.development";
import ThemeContext from "../../context/ThemeContext";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_07naqcs",
        "template_7q2ralq",
        formRef.current,
        "user_OvVi0G8uTw8OZS7fATKjE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Cuentame tu idea</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +54 9 221 353-7003
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              a.mayora@live.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Ciudad de La Plata. Buenos aires, Argentina.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>¿Cuál es tu proyecto? </b> Contactame. Siempre disponible para
            trabajar como autónomo si se presenta el proyecto adecuado.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
            <div className="thanks">{done && "Thank You..."}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
