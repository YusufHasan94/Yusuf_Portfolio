import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <About></About>
            <Service></Service>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;