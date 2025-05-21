import AboutSection from "../../layouts/About";
import ContactSection from "../../layouts/Contact";
import Footer from "../../components/Footer";
import HomeSection from "../../layouts/Home";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import ProjectsSection from "../../layouts/Projects";

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
