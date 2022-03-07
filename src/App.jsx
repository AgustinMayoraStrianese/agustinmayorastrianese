import { useContext } from "react/cjs/react.development";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProyectList from "./components/proyectsList/ProyectList.jsx";
import Toggle from "./components/toggle/Toggle.jsx";

import ThemeContext from "./context/ThemeContext.js";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProyectList />
      <Contact />
    </div>
  );
};

export default App;
