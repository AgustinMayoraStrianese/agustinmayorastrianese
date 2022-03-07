import { useContext } from "react/cjs/react.development";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProyectList from "./components/proyectsList/ProyectList";
import Toggle from "./components/toggle/Toggle";
import ThemeContext from "./context/ThemeContext";

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
