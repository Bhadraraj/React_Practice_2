import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

import paginate from './paginate'

const Movie = () => {    


  const [movies, setmovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3000/movies');
        const data = await response.json();

        console.log(data);
        setmovies(data)
      }
      catch (error) {
        console.error("Error Fetching Movies", error)

      };
    };
    fetchMovies(); 
  }, []);
  const handleDelete = (movie) => {
    const updatedMovies = movies.filter(m => m._id !== movie._id)
    console.log(updatedMovies)
    setmovies(updatedMovies)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  // const length = movies.length;
  const { length: count } = movies
  const allMovies = paginate(movies, currentPage, pageSize)

  return (
    <>
      {count}
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
          {/* {movies.map(movie => ( */}
          {allMovies.map(movie => (

            < tr key={movie._id} >
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><button onClick={() => handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table >

      <Pagination onPageChange={handlePageChange} itemsCount={count} currentPage={currentPage} pageSize={pageSize} />

    </>
  );
}

export default Movie;
