import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../style.css";

const MovieGallery = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=766db7eb&s=${searchQuery}`
        );
        const data = await response.json();
        setMovies(data.Search ? data.Search.slice(0, 6) : []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="movie-gallery my-2 mx-5">
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={6} md={4} lg={2} className="text-center">
            <div className="card-container">
              <img
                src={
                  movie.Poster !== "N/A" ? movie.Poster : "default-image.jpg"
                }
                alt={movie.Title}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieGallery;
