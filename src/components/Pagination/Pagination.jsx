import { PaginationItem } from "../PaginationItem/PaginationItem";

function Pagination({ onNextPage, onPreviousPage, page, totalPages, otherPage}) {

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center my-4">
        <li className="page-item" key="previous" onClick={onPreviousPage}>
          <button className={`page-link ${page === 1 ? "disabled" : ""}`}>Previous</button>
        </li>
        <PaginationItem 
        otherPage = {otherPage}
        page={page}
        totalPages={totalPages}/>
        <li className="page-item" key="next" onClick={onNextPage}>
          <button className={`page-link ${page === totalPages ? "disabled" : ""}`}>Next</button>
        </li>
      </ul>
    </nav>
   
  );
}

export { Pagination };
