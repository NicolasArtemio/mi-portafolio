import { SkillsComp } from "../../components";
import AboutSection from "../../components/about/AboutSection";
import ContactSection from "../../components/contact/ContactSection";
import ProjectSection from "../../components/projects/ProjectSection";


const HomePage = () => {

    return (
      <>
        <AboutSection />
        <SkillsComp />
        <ProjectSection />
        <ContactSection />
      </>
  
    );
  };
  
  export default HomePage; 