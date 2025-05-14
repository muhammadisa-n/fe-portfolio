import AboutSection from "../../components/About";
import ContactSection from "../../components/Contact";
import Footer from "../../components/Footer";
import HomeSection from "../../components/Home";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import ProjectsSection from "../../components/Projects";

function HomePage() {
  return (
    <>
      <Loading seconds={2} />
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
