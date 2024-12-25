import './Pagination.scss';
import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, handlePageClick, currentPage }) {
    return (
        <div className="pagination">
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                previousClassName={currentPage === 0 ? 'disabled' : ''}
                nextClassName={currentPage === pageCount - 1 ? 'disabled' : ''}
            />
        </div>
    );
}

export default Pagination;
