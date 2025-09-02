import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Location from "./sections/Location/Location";
import ServiceLayout from "./pages/ServiceLayout/ServiceLayout";

const basename = import.meta.env.BASE_URL;

// Página de inicio que compone tus secciones actuales
const Home: React.FC = () => (
  <>
    <Hero />
    <Services />
    <About />
    <Location />
    <Contact />
  </>
);

const App: React.FC = () => (
  <Router basename={basename}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/:id" element={<ServiceLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  </Router>
);

export default App; 