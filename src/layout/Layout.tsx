import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Layout.css';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton/FloatingWhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className="header-spacer"></div>
    <div>{children}</div>
    
    <FloatingWhatsAppButton marginBottom='5rem'/>
    <FloatingWhatsAppButton color='#2591d3' message='Normativas' url='https://drive.google.com/drive/folders/1AiSyqbAscj7rg-RU4ced-C3SyzejwHkU' button="normativa"/>
    <Footer />
  </>
);

export default Layout; 