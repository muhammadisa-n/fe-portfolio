import AboutSection from "../../components/About";
import HomeSection from "../../components/Home";
import Navbar from "../../components/Navbar";
import ProjectsSection from "../../components/Projects";

function HomePage() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </>
  );
}

export default HomePage;
