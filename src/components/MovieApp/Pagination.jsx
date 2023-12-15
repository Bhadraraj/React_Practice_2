import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';


function Pagination(props) {        

    const { itemsCount, pageSize, currentPage, onPageChange } = props
    console.log(currentPage);
    const pageCount = Math.ceil(itemsCount / pageSize)

    const pages = _.range(1, pageCount + 1)
    console.log(pages)
    return (
        <>
            <nav>
                <ul class="pagination">
                    {pages.map(page => (


                        <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}><a class="page-link" href="#" onClick={() => onPageChange(page)}>
                            {page} </a></li>
                    ))}

                </ul>
            </nav>

        </>
    )
}

export default Pagination