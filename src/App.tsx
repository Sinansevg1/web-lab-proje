import { useState } from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import { ContentProvider } from "./context/ContentProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";
import EducationSection from "./components/sections/EducationSection";
import CertificatesSection from "./components/sections/CertificatesSection";
import AdminDrawer from "./components/admin/AdminDrawer";

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <ThemeProvider>
      <ContentProvider>
        <div className="min-h-screen flex flex-col">
          <Header onOpenAdmin={() => setAdminOpen(true)} />
          <main className="flex-1">
            <Hero />
            <About />
            <Skills />
            <EducationSection />
            <CertificatesSection />
            <ProjectList />
            <ContactSection />
          </main>
          <Footer />
          <AdminDrawer open={adminOpen} onClose={() => setAdminOpen(false)} />
        </div>
      </ContentProvider>
    </ThemeProvider>
  );
}
