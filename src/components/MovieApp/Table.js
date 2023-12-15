import React from 'react'

function Table(props) {


    return (
        <table className="table">
        <thead>
<tr>
  <th>Title</th>
  <th>Genre</th>
  <th>Stock</th>
  <th>Rate</th>
  
</tr>
</thead> 
<tbody>{
 props.movies.map(movie => (
    
    <tr key={movie._id}>
    <td>{movie.title}</td>
    <td>{movie.genre.name}</td>
    <td>{movie.numberInStock}</td>
    <td>{movie.dailyRentalRate}</td>
    <td><button onClick={() => props.clickME(movie)} className="btn btn-danger btn-sm">Delete</button></td>
  </tr>   
    ))   
  }

</tbody>
</table>


    )


}

export default Table;