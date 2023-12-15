import React, { useState, useEffect } from 'react';
import Table from './Table';
import axios from 'axios';

const Movie1 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {


    axios.get('http://localhost:3000/movies')
      .then(res => {
        const movies = res.data;
        setMovies(movies);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (movie) => {
    const updatedMovies = movies.filter(m => m._id !== movie._id);
    setMovies(updatedMovies);
  }

  const { length: count } = movies;

  if (count === 0)
    return <p>There is no movies in the database</p>;

  return (
    <>
      <Table clickME={handleDelete} movies={movies}></Table>
      <div>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={() => handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Movie1;
