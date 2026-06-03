import react from 'react';

function Button ({onNextPage,onPreviousPage}){
    return ( 
        <div>
            <button type="button" onClick={onPreviousPage}> previous Page</button>
            <button type="button" onClick={onNextPage}> next Page</button>
        </div>
    )
}

export {Button};