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
    
    <FloatingWhatsAppButton color='#2591d3' message='Normativas' url='https://google.com.mx' image='img/file-60.png' marginBottom='5rem'/>
    <FloatingWhatsAppButton />
    <Footer />
  </>
);

export default Layout; 