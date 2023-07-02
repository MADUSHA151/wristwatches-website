import React from "react";
import NavigationHeader from "../layouts/NavigationHeader";
import HeroSection from "../layouts/HeroSlider";
import CollectionSection from "../layouts/Collection";
import AboutUs from "../layouts/AboutUs";
import Contact from "../layouts/ContactUs";
import Footer from "../layouts/Footer";
import SliderImg from "../layouts/ImageSlider";

function Home() {
     return (
          <div>
               <NavigationHeader />
               <SliderImg />
               <HeroSection />
               <CollectionSection />
               <AboutUs />
               <Contact />
               <Footer />
          </div>
     );
}

export default Home;