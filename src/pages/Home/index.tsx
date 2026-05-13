import { useEffect, useState } from "react";
import { i18nReady } from "../../i18n";

import AboutSection from "../../layouts/About";
import ContactSection from "../../layouts/Contact";
import Footer from "../../components/Footer";
import HomeSection from "../../layouts/Home";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import ProjectsSection from "../../layouts/Projects";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function HomePage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    Promise.all([
      i18nReady,
      sleep(2000),
    ]).finally(() => {
      if (mounted) {
        setReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) {
    return <Loading fullscreen />;
  }

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;