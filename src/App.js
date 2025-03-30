import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Solutions from "./components/Solutions";
import WhyChoose from "./components/WhyChoose";
import Industries from "./components/Industries";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <WhoWeAre />
        <Solutions />
        <WhyChoose />
        <Industries />
        <Contact />
      </main>
    </div>
  );
}

export default App;
