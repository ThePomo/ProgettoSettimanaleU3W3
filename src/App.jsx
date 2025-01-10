import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Section from "./components/SectionGenres";

function App() {
  const [] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Section></Section>
      <Footer></Footer>
    </>
  );
}

export default App;
