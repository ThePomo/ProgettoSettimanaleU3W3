import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Section from "./components/SectionGenres";
import MovieGallery from "./components/MovieGallery";
import { Container } from "react-bootstrap";

const App = () => {
  console.log("App component rendered");

  return (
    <>
      <Navbar />
      <Section />
      <Container>
        <h2 className="my-3 mx-4">Trending Now</h2>
        <MovieGallery searchQuery="harry potter" />
        <h2 className="my-3 mx-4">Top Movies</h2>
        <MovieGallery searchQuery="avengers" />
        <h2 className="my-3 mx-4">Horror Movies</h2>
        <MovieGallery searchQuery="halloween" />
        <h2 className=" my-3 mx-4">Watch it Again</h2>
        <MovieGallery searchQuery="lord of the rings" />
        <h2 className="my-3 mx-4">New Releases</h2>
        <MovieGallery searchQuery="the matrix" />
        <h2 className="my-3 mx-4">Best Comedy</h2>
        <MovieGallery searchQuery="American pie" />
      </Container>
      <Footer />
    </>
  );
};

export default App;
