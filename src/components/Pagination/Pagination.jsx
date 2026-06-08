function Pagination({ onNextPage, onPreviousPage }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center my-4">
        <li className="page-item" key="previous" onClick={onPreviousPage}>
          <button className="page-link">Previous</button>
        </li>
        <li className="page-item" key={1}>
          <button className="page-link" href="#">
            1
          </button>
        </li>
        <li className="page-item" key={2}>
          <button className="page-link" href="#">
            2
          </button>
        </li>
        <li className="page-item" key={3}>
          <button className="page-link" href="#">
            3
          </button>
        </li>
        <li className="page-item" key="next" onClick={onNextPage}>
          <button className="page-link">Next</button>
        </li>
      </ul>
    </nav>
    // <div>
    //     <button type="button" onClick={onPreviousPage}> previous Page</button>
    //     <button type="button" onClick={onNextPage}> next Page</button>
    // </div>
  );
}

export { Pagination };
