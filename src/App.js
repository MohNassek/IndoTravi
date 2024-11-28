import React from 'react';
import HomePage from './components/ui/Home/Home' ;
import ImageGrid from './components/ui/locations/ImageGrid';
import HowItWorks from './components/ui/HowItsWork/HowItWorks'; 
import Package from './components/ui/package/Package'; 
import Feedback from './components/ui/Testominals/Feedback';
import BlogSection from './components/ui/Blog/BlogSection';
import Footer from './components/ui/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ImageGrid />
      <HowItWorks/>
      <Package />
      <Feedback />
      <BlogSection />
      <Footer />
      
      
      
     
    </div>
  );
}

export default App;
