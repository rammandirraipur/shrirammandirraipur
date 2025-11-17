import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import DonationForm from "./components/DonationForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import BowCursor from "./CursorEffect";


function App() {
  return (
    <>
          <BowCursor />

      <Navbar />
      <Home />
      <About />
      <Gallery />
      <DonationForm />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
