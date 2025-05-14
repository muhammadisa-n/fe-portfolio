import AboutSection from "../../components/About";
import ContactSection from "../../components/Contact";
import Footer from "../../components/Footer";
import HomeSection from "../../components/Home";
import Navbar from "../../components/Navbar";
import PreLoader from "../../components/PreLoader";
import ProjectsSection from "../../components/Projects";

function HomePage() {
  return (
    <>
      <PreLoader />
      <div className="container mx-auto px-4">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
