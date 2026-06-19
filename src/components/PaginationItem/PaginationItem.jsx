function PaginationItem({ page, totalPages, otherPage }) {
  const showPages = [];

  for (let index = 1; index <= totalPages; index++) {
    showPages.push(index);
  }

  const items = showPages
    .slice(0, 5)
    .map((pagination) => (
      <li className="page-item" key={pagination}>
        <button className={`page-link ${page === pagination ? "active" : ""}`} onClick={() => otherPage(pagination)}>
          {pagination}
        </button>
      </li>
    ));

    const centredPage = showPages.slice(page - 3, page + 2)
    .map((pagination) => (
      <li className="page-item" key={pagination}>
        <button className={`page-link ${page === pagination ? "active" : ""}`} onClick={() => otherPage(pagination)}>
          {pagination}
        </button>
      </li>
    ));

    const lastItems = showPages
    .slice(totalPages - 5, totalPages)
    .map((pagination) => (
      <li className="page-item" key={pagination}>
        <button className={`page-link ${page === pagination ? "active" : ""}`} onClick={() => otherPage(pagination)}>
          {pagination}
        </button>
      </li>
    ));
    

    if(page >= showPages.length - 2 && page - 3 <= showPages.length){
      console.log("showPages",showPages, showPages.length, totalPages,page);
      
      return <>{lastItems}</>;
    }else if(page >= showPages.length - (showPages.length - 5) && page - 3 <= showPages.length - 5){

      return <>{centredPage}</>;
    }else {
      
      return <>{items}</>;
    }
  }      


export {PaginationItem}